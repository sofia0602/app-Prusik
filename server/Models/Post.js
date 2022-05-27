import mongoose from "mongoose";
import User from "./User.js";

const Post= new mongoose.Schema({
    author:{type:String, required:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    price:{type:Number, required:true},
    picture:{type:String},
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

export default mongoose.model('Post',Post)