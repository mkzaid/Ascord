import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { chats } from "./data/data.js";
import { connectDB } from "./db/mongoDB.js";

dotenv.config();
const app = express();
//Connecting Database to our app
connectDB();
app.use(cors({  origin:"*" }))


app.get("/api/chats",(req , res)=>{
 console.log("req recieved");
 res.status(200).json(chats)

})

app.get("/api/chat/:id",(req , res)=>{
 const chatId = req.params.id;
 console.log(chatId);
 const chat = chats.find((chat)=>chat._id===chatId)
 console.log(chat);
 res.status(200).json(chat)

})

app.listen(process.env.PORT,()=>{
        console.log("Server is Runing on Port",process.env.PORT);
})