const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const userData = require("./routes/user")
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.use(userData);

app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb+srv://rahman:rahman123@cluster0.b211i6f.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connection established")
}).catch((e)=>{
    console.log("No connection")
})
app.listen(port,()=>{
    console.log(`server is running on port No ${port}`)
})
