import mongoose from "mongoose";

const connectDB = handler => async (req, res)=>{
    if(mongoose.connection[0]){
        console.log(mongoose.connections[0])
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGOSSE_URI)
    return handler(req, res)
}
export default connectDB;