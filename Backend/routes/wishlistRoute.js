import express from "express";
import { addToWishlistController, getWishlistController, removeFromWishlistController, clearWishlistController } from "../controllers/wishlistController.js";

const router = express.Router();

router.post("/:userId/:houseId", addToWishlistController);
router.get("/:userId", getWishlistController);
router.delete("/:userId/:houseId", removeFromWishlistController);
router.delete("/:userId", clearWishlistController);

export default router;