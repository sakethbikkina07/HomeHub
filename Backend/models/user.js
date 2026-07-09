import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    confirmPassword:{
        type:String,
        required:true
    },

    phoneNumber:{
        type:String,
        default:"",
        unique:true
    },

    preferredLocation:{
        type:String,
        default:""
    },

    preferredPropertyType:{
        type:String,
        default:""
    },

    budgetPreference:{
        type:String,
        default:""
    },

    features:{
        type:String,
        default:""
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model("User", userSchema);