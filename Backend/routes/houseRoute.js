import express from "express";
import { createHouseController, getAllHousesController, getHouseByIdController, updateHouseController, deleteHouseController, filterHousesController, getAvailableHousesController, getHousesByOwnerController } from "../controllers/houseController.js";

const router = express.Router();

router.post("/", createHouseController);
router.get("/", getAllHousesController);
router.get("/:id", getHouseByIdController);
router.put("/:id", updateHouseController);
router.delete("/:id", deleteHouseController);
router.get("/filter", filterHousesController);
router.get("/available", getAvailableHousesController);
router.get("/owner/:ownerId", getHousesByOwnerController);

export default router;