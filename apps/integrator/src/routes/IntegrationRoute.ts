import express from "express";

const router: express.Router = express.Router();

router.get("/getmine",(req,res)=>{
    //TODO: Get my integrations
    res.send("Create Route");
})

router.post("/create",(req,res)=>{
    //TODO: Create Integration
    res.json({
        webhookUrl:"http://localhost:5000/webhook",
        integrationId:"1234"
    })
})


router.post("/update/:integrationId",(req,res)=>{
    //TODO: Update Integration
    res.json({  
        message:"Integration Updated"
    })  
})

router.post("/delete/:integrationId",(req,res)=>{
    //TODO: Delete Integration
    res.json({
        message:"Integration Deleted"
    })
})


export default router;