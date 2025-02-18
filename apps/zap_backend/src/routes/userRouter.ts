import { PrismaClient } from '@prisma/client'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import "dotenv/config"

const router=express.Router()
const client=new PrismaClient()

const JWT_SECRET=process.env.JWT_SECRET || "jwtsecret"
console.log(JWT_SECRET)

router.post("/signup",async (req,res)=>{
    const {username,email,password}=await req.body
    console.log({username,email,password})

        const userExisted=await client.user.findFirst({
            where:{
                name:username
            }
        });

        if(userExisted){
            res.status(201).json("user already existed..please signIN!")
            return;
        }

        const hashedPassword=await bcrypt.hash(password,10)

        const createUser=await client.user.create({
          data:{
            name:username,
            email:email,
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
    const {username,password}=await req.body
    console.log({username,password})

    const user=await client.user.findFirst({
        where:{
            name:username
        }
    })

    if(!user){
        console.log("user not found");
        res.status(404).json("user not found")
        return
    }

    const isPasswordValid=await bcrypt.compare(password,user.password)
    if (!isPasswordValid){
        console.log("password is not valid");
        res.status(401).json("password is not valid")
        return
    }

    const token=await jwt.sign({
        id:user.id
    },JWT_SECRET)

    res.setHeader("Set-cookie",token).status(200).json({
        message:"signIn Successful",
        token:token
    })
})