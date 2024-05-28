import mongoose from "mongoose" ;

const userSchema= new mongoose.Schema({
    email : {
        type:String,
        required:true,
    },
    password:{
        type:String,
    },
    enrollmentNumber : {
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    registrationNumber:{
        type:Number,
        required:true,
    },
    role:{
        type:String,
        // required: true,
        enum:['student', 'warden'], 
        default:'student',
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isWardenVerified:{
        type:Boolean,
        default:false,
    },
    isStudentRepresentative:{
        type:Boolean,
        default:false,
    }

},{timestamps:true}) ;

const User = mongoose.model("User", userSchema) ;
export default User ;