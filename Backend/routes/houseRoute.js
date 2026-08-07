import express from "express";
import { createHouseController, getAllHousesController, getHouseByIdController, updateDetailsController, deleteHouseController, getAvailableHousesController} from "../controllers/houseController.js";
const router = express.Router();

router.post("/", createHouseController);
router.get("/", getAllHousesController);
router.get("/status/:status", getAvailableHousesController);
router.get("/:id", getHouseByIdController);
router.put("/:id", updateDetailsController);
router.delete("/:id", deleteHouseController);

export default router;