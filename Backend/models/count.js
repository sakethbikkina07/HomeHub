import mongoose from "mongoose";

const countSchema = new mongoose.Schema({
  houseId: {
    type: String,
    required: true,
    unique: true,
  },
  savedCount: {
    type: Number,
    default: 0,
  },
  viewsCount: {
    type: Number,
    default: 0,
  },
  contactCount: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Count", countSchema);
