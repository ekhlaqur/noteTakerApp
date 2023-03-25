const bodyParser = require("body-parser");
const express = require("express");
const Scheduler = require("../model/user")
const app =express();
const router = express.Router();
router.post("/Sigup", async(req, res) =>{
    try{
        const {email, password, confirmPassword} = req.body;
        const user = await Scheduler.findOne({email:email});
        if(userData){
            return res.json({
                error:"user already exists"
            })
        }
        if(password !==confirmPassword){
            return res.json({
                error:"password & confirm password not match"
            })
        }
        res.json({
            message: "your account created"
        })
    }
    catch(e){
        console.log(e)
    }
})
router.post("/signin", async(req, res)=>{
    try{
        const {email, password} = req.body;
        const userData = await Scheduler.findOne({email:email})
        if(!userData){
            return res.json({
                error:"user already exists"
            })
        }
        if(password !==userData.password){
            return res.json({
                error:"invalid password"
            })
        }
        res.json({
            message:"signin sucessfully"
        })
    }
    catch(e){
        console.log(e)
    }
})
module.exports = app;