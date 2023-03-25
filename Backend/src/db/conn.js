const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/NotApp")
.then(()=>{
    console.log("connection is created")
}).catch((e)=>{
    console.log("No connection")
})