import express from "express";
import { createOwnerController, getOwnerByIdController, getAllOwnersController, deleteOwnerController } from "../controllers/ownerController.js";

const router = express.Router();

router.post("/", createOwnerController);
router.get("/:id", getOwnerByIdController);
router.get("/", getAllOwnersController);
// router.put("/:id", updateOwnerController);
router.delete("/:email", deleteOwnerController);

export default router;