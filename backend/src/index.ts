import express, { request , response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=> console.log('Connected to database'));

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async(request,response)=>{
    response.json({ message: "Hello"});
});

app.listen(7000, () =>{
    console.log("server started on localhost:7000");
});