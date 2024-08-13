import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGOODB_URI)
        console.log(`Database connected successfully at : ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
export {connectDB}