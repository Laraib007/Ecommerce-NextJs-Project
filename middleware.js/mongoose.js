import mongoose from "mongoose";

const connectDB =async (handler)=>{
    if(mongoose.connection[0].isReadyState){
        return handler(req, res)
    }
    await mongoose.connect(process.env.MONGOSSE_URI)
    return handler(req, res)
}
export default connectDB;