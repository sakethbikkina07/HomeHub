import express from "express";
import {createUserController, loginUserController, getUser, updateUserProfile, deleteUserController, getUserByEmailController} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.get("/profile/:email", getUserByEmailController);
router.get("/:id", getUser);
router.put("/:email", updateUserProfile);
router.delete("/:email", deleteUserController);

export default router;