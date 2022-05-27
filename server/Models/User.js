import mongoose from "mongoose";

const User= new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    createdTime:{type: String},
    editedAt: { type: String },
})

export default mongoose.model('User',User)