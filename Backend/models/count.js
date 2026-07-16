import mongoose from "mongoose";

const countSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "owners",
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("count", countSchema);