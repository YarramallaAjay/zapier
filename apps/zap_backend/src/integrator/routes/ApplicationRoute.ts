import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import { Auth } from "../middlewares/Auth"

const router=express.Router()

router.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    }
))
router.use(express.json())
router.use(cookieParser())
router.use(Auth)

router.get("/apps",async (req,res)=>{

})

router.post("/newapp",async (req,res)=>{

})
router.post("/addauth",async (req,res)=>{

})

router.post("/addtrigger",(req,res)=>{

})

router.post("/addaction",async (req,res)=>{

})

