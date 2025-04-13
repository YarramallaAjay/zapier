import { PrismaClient } from '@prisma/client'
import express,{Router} from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import "dotenv/config"
import { signInSchema,signupSchema } from '../utils/zodSchema'

const router:express.Router=Router()
const client=new PrismaClient()

const JWT_SECRET=process.env.JWT_SECRET || "jwtsecret"
console.log(JWT_SECRET)

router.post("/signup",async (req,res)=>{
    const parsedData=await signupSchema.safeParse(req.body)
    if(!parsedData.success){
        console.log("validation failed..check again")
        res.status(400).json({message:"validation failed..check again"})
        return
    }

    console.log(parsedData.data)

        const userExisted=await client.user.findFirst({
            where:{
                name:parsedData.data.name
            }
        });

        if(userExisted){
            res.status(201).json("user already existed..please signIN!")
            return;
        }

        const hashedPassword=await bcrypt.hash(parsedData.data.password,10)

        const createUser=await client.user.create({
          data:{
            name:parsedData.data.name,
            email:parsedData.data.email,
            password:hashedPassword
          }
        })

        if(createUser){
            res.status(200).json("user created successfullly..please signin!")
            return
        }

        res.json(400).json("Error occured")

})



router.post("/signin",async (req,res)=>{
    const parsedData=await signInSchema.safeParse(req.body)
    if(!parsedData.success){
        console.log("validation failed")
        res.status(400).json({message:"validation failed"})
        return

    }
    console.log(parsedData.data)

    const user=await client.user.findFirst({
        where:{
            email:parsedData.data.email
        }
    })

    if(!user){
        console.log("user not found");
        res.status(404).json("user not found")
        return
    }

    const isPasswordValid=await bcrypt.compare(parsedData.data.password,user.password)
    if (!isPasswordValid){
        console.log("password is not valid");
        res.status(401).json("password is not valid")
        return
    }

    const token=await jwt.sign({
        id:user.id
    },JWT_SECRET)

    res.cookie("token",token,{
        httpOnly:true,
        maxAge: 30 * 24 * 60 * 60 * 1000, //
        sameSite:'none',
        secure:false
    })
    res.status(200).send({
        message:"signIn Successful",
        token:token
    })
})

export default router;