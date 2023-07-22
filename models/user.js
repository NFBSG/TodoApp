import mongoose from "mongoose";
const  schema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        require:true,
        type:String,
        select:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
})

export const NewUser = mongoose.model("NewUser",schema);
