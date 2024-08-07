import express from "express"
import cors from "cors"

const app = express();

app.use(cors({  origin:"*" }))


app.get("/",(req , res)=>{

 return res.status(200).send('<h1>Server is Working<h1/>')

})

app.listen(5000,()=>{
        console.log("Server is Runing on Port:5000");
})