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
        type:Number,
        required:true
    },
    description:{
        type:String,
        default:""
    },
    rating:{
        type:Number,
        default:0
    },
    bedrooms:{
        type:Number,
        default:0
    },
    bathrooms:{
        type:Number,
        default:0
    },
    areaSqft:{
        type:Number,
        default:0
    },
    features:{
        type:String,
        default:""
    },
    images:{
        type:[String],
        default:[]
    },
    status:{
        type:String,
        enum:["available","sold","pending"],
        default:"available"
    }
});

export default mongoose.model("House", houseSchema);