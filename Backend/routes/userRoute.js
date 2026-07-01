import express from "express";
import {createUser,loginUserController,getAllUsers,getUser,getUserByEmailController,getUserByNameController,updateUserProfile,deleteUserController} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser);

router.post("/login", loginUserController);

router.get("/user/:id", getUser);

router.get("/email/:email", getUserByEmailController);

router.get("/name/:userName", getUserByNameController);

router.get("/", getAllUsers);

router.put("/update/:email", updateUserProfile);
    
router.delete("/delete/:email", deleteUserController);

export default router;