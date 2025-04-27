import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {type: String, required: true}, 
  email: {type: String, required: true, unique: true},
  city: {type: String, default: ''},
  address: {type: String, default: ''},
  nearby: {type: String, default: ''},
  cellNumber: {type: String, default: ''},
  password: {type: String, required: true}
});
mongoose.models = {}
export default mongoose.model("User", UserSchema)