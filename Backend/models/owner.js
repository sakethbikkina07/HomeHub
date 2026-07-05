import mongoose from "mongoose";

const ownerSchema = new mongoose.Schema({
    ownerName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    sellingPropertyType:{
        type:String,
        required:true
    },
    budget:{
        type:String,
        required:true
    }
});

export default mongoose.model("Owner", ownerSchema);