const express = require('express');
const dotenv = require('dotenv')
const {default : mongoose} = require('mongoose')
const userRouter = require("../Chat_app_server/Router/userRouter")

const app = express();
dotenv.config()
app.use(express.json())
const connectDb = async () =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("server is connected to database");
    } 
    catch(err){  
        console.log("server is not connected ", err.message)
    }
};

connectDb();

app.get("/" , (req,res) => {  
    res.send("api is running")
})
 
app.use("/user" , userRouter)

console.log(process.env.MONGO_URI)
const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log("server is running"))    