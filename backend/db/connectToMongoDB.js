import mongoose from "mongoose";
import { login } from "../controllers/auth.controllers.js";
const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("connected to mongodb");
        
    } catch (error) {
        console.log("Error connecting to mongodb",error.message);
    }
}
export default connectToMongoDB;