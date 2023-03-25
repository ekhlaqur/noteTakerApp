const mongoose = require("mongoose");
const validator = require("validator");
const eventSchema = new mongoose.Schema({
    email : {
        type:String,
        require:true,
        unique:[true,"email already exists"]
    },
    password : {
        type:String,
        require:true,
        maxlength:15
    }

})
const Scheduler = new mongoose.model("Scheduler", eventSchema);
module.exports = Scheduler;