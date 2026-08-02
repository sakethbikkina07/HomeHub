import express from "express";
import {createUserController, loginUserController, getUserController, getUserByIdController , updateUserProfile, deleteUserController, getUserByEmailController,getHouseCount,increaseSaved,decreaseSaved,increaseViews,increaseContacts} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.get("/", getUserController);
router.get("/profile/:email", getUserByEmailController);
router.get("/:id", getUserByIdController);
router.put("/:email", updateUserProfile);
router.delete("/:email", deleteUserController);
router.get("/saved/increase", increaseSaved);
router.get("/saved/decrease", decreaseSaved);
router.get("/views/increase", increaseViews);
router.get("/contacts/increase", increaseContacts);


export default router;