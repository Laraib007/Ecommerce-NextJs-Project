import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  name: {type: String, required: true}, 
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});
mongoose.models = {}
export default mongoose.model("Admin", AdminSchema)