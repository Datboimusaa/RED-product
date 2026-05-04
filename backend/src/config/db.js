import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";

const connectDB = async() => {
    try{
        const connect = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB successfully connected ${connect.connection.host}`)
    }
    catch(error){
        console.error(error)
        process.exit(1)
    }
}

export default connectDB
