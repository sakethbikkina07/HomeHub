import express from "express";
import { createOwnerController, getOwnerByIdController, getAllOwnersController, updateOwnerController, deleteOwnerController } from "../controllers/ownerController.js";

const router = express.Router();

router.post("/", createOwnerController);
router.get("/:id", getOwnerByIdController);
router.get("/", getAllOwnersController);
router.put("/:id", updateOwnerController);
router.delete("/:id", deleteOwnerController);

export default router;