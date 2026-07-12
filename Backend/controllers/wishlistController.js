import {addToWishlist, getWishlist, removeFromWishlist, clearWishlist} from "../services/wishlistService.js";

const addToWishlistController = async (req, res) => {
    try {
        const wishlistItem = await addToWishlist(req.params.userId, req.params.houseId);
        res.status(201).json(wishlistItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getWishlistController = async (req, res) => {
    try {
        const wishlist = await getWishlist(req.params.userId);
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const removeFromWishlistController = async (req, res) => {
    try {
        const removedItem = await removeFromWishlist(req.params.userId, req.params.houseId);
        res.status(200).json(removedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const clearWishlistController = async (req, res) => {
    try {
        const clearedWishlist = await clearWishlist(req.params.userId);
        res.status(200).json(clearedWishlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export { addToWishlistController, getWishlistController, removeFromWishlistController, clearWishlistController };