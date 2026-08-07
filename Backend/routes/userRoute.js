import express from "express";
import {createUserController, loginUserController, getUserController, getUserByIdController , updateUserProfile, deleteUserController, getUserByEmailController,getHouseCount,increaseSaved,decreaseSaved,increaseViews,increaseContacts} from "../controllers/userController.js";
import verifyToken from "../Middlewares/authmiddleware.js";
const router = express.Router();

router.post("/register", createUserController);
router.post("/login", loginUserController);
router.get("/",verifyToken, getUserController);
router.get("/profile/:email", getUserByEmailController);
router.get("/:id", getUserByIdController);
router.put("/:email",verifyToken, updateUserProfile);
router.delete("/:email", deleteUserController);
router.get("/house-count/:houseId", getHouseCount);
router.put("/saved/increase/:houseId", increaseSaved);
router.put("/saved/decrease/:houseId", decreaseSaved);
router.put("/views/increase/:houseId", increaseViews);
router.put("/contacts/increase/:houseId", increaseContacts);


export default router;