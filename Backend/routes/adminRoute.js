import express from "express";
import {createAdminController, getDashboardDataController, getAllUsersController, getAllOwnersController, getAllHousesController, deleteUserController, deleteOwnerController, deleteHouseController, updateHousesController} from "../controllers/adminController.js";

const router = express.Router();

router.post("/create-admin", createAdminController);
router.get("/dashboard", getDashboardDataController);
router.get("/users", getAllUsersController);
router.get("/owners", getAllOwnersController);
router.get("/houses", getAllHousesController);
router.delete("/users/:email", deleteUserController);
router.delete("/owners/:email", deleteOwnerController);
router.delete("/houses/:id", deleteHouseController);
router.put("/houses/:id", updateHousesController);

export default router;