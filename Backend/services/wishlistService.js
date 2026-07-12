import Wishlist from "../models/wishlist.js";

const addToWishlist = async (userId, houseId) => {
    const existingWishlistItem = await Wishlist.findOne({ userId, houseId });
    if (existingWishlistItem) {
        throw new Error("Item already in wishlist");
    }
    const wishlistItem = new Wishlist({ userId, houseId });
    await wishlistItem.save();
    return wishlistItem;
};

const getWishlist= async (userId) => {
    const wishlistItems = await Wishlist.find({ userId }).populate('houseId');
    return wishlistItems;
};

const removeFromWishlist = async (userId, houseId) => {
    const wishlistItem = await Wishlist.findOneAndDelete({ userId, houseId });
    if (!wishlistItem) {
        throw new Error("Item not found in wishlist");
    }   
    return wishlistItem;
};

const clearWishlist = async (userId) => {
    const result = await Wishlist.deleteMany({ userId });
    return result;
};

export { addToWishlist, getWishlist, removeFromWishlist, clearWishlist };