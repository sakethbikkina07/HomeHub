import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
    ownerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Owner",
        required: true
    },
    houseName:{
        type:String,
        required:true
    },
    propertyType:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        default:""
    },
    rating:{
        type:String,
        default:""
    },
    bedrooms:{
        type:Number,
        default:""
    },
    bathrooms:{
        type:Number,
        default:""
    },
    areaSqft:{
        type:Number,
        default:""
    },
    features:{
        type:String,
        default:""
    },
    status:{
        type:String,
        enum:["available","sold","pending"],
        default:"available"
    },
    image:{
        type:String,
        default:""
    }
});

export default mongoose.model("House", houseSchema);