import express from "express";
import {createAdminController, deleteAdminController, updateAdminController} from "../controllers/adminController.js";

const router = express.Router();

router.post("/create-admin", createAdminController);
// router.get("/dashboard", getDashboardDataController);
// router.get("/users", getAllUsersController);
// router.get("/owners", getAllOwnersController);
// router.get("/houses", getAllHousesController);
// router.delete("/users/:email", deleteUserController);
// router.delete("/owners/:email", deleteOwnerController);
router.delete("/delete-admin/email/:email", deleteAdminController);
router.put("/update-admin/:id", updateAdminController);

export default router;