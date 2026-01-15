const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors")
const todoRouter = require("./routers/todoRouter.js")

dotenv.config();

// This code is connection build into nodejs and mongodb
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todo');
}
main().then((res)=>{
    console.log("connection is successfully")
}).catch((error)=>{
    console.log(error)
});

app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.use("/api",todoRouter)


// Test Routes
app.get("/test",(req,res,next)=>{
    console.log("request was recived on this home routes");
    res.send("this is test routes")
})

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log("server is started on this port",PORT);
})