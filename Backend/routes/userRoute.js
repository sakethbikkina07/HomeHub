import express from "express";
import {createUserController, loginUserController, getUser, getUserByIdController , updateUserProfile, deleteUserController, getUserByEmailController} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.get("/", getUser);
router.get("/profile/:email", getUserByEmailController);
router.get("/:id", getUserByIdController);
router.put("/:email", updateUserProfile);
router.delete("/:email", deleteUserController);

export default router;