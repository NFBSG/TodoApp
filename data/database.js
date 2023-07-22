import mongoose from "mongoose";

export const commectDB=()=>{
const url="mongodb+srv://Satyam:Satyam67890AL@cluster0.qsvinjr.mongodb.net/apilearning?retryWrites=true&w=majority";
mongoose.set('strictQuery',true);
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection success')
}).catch((err)=>{console.log(err)});
}