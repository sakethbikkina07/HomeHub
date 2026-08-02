import mongoose from "mongoose";

const houseSchema = new mongoose.Schema({
 
  houseName: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  rating: {
    type: String,
    default: "0"
  },
  bedrooms: {
    type: Number,
    default: 0 
  },
  bathrooms: {
    type: Number,
    default: 0 
  },
  areaSqft: {
    type: Number,
    default: 0 
  },
  features: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    enum: ["available", "sold", "pending"],
    default: "available"
  },
  image: {
    type: String,
    default: ""
  },
  ownerName: {
    type: String,
    default: ""
  },
  phoneNumber: {
    type: String,
    default: ""
  },
  email: {
    type: String,
    default: ""
  }
});

export default mongoose.model("House", houseSchema);