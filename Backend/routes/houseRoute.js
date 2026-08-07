import express from "express";
import { createHouseController, getAllHousesController, getHouseByIdController, updateDetailsController, deleteHouseController, getAvailableHousesController} from "../controllers/houseController.js";
const { verifyToken } = require("../Middlewares/authmiddleware.js");
const router = express.Router();

router.post("/",verifyToken, createHouseController);
router.get("/",verifyToken, getAllHousesController);
router.get("/status/:status",verifyToken, getAvailableHousesController);
router.get("/:id", getHouseByIdController);
router.put("/:id", verifyToken, updateDetailsController);
router.delete("/:id", verifyToken, deleteHouseController);

export default router;