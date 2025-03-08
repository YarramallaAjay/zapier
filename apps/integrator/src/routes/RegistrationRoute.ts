import express from "express";
import { Auth } from "../middlewares/Auth";

const router: express.Router = express.Router();

router.get("/getTeam/:teamId",Auth,async(req,res)=>{
    //TODO: Get Team Details
    res.send("Team Details");
})

router.post("/createTeam",Auth,async(req,res)=>{
    //TODO: Create Team
})

router.post("/updateTeam/:teamId",Auth,async (req,res)=>{
    //TODO: Update Team
})


router.post("/signin",async(req,res)=>{
    //TODO: Signin
})
router
export default router;