import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    houseId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true
    },
    savedDate:{
        type:Date,
        default:Date.now
    }
});

export default mongoose.model("Wishlist", wishlistSchema);