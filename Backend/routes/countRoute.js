import express from "express";

import {
  getOwnerCount,
  increaseSaved,
  decreaseSaved,
  increaseViews,
  increaseContacts,
} from "../controllers/countController.js";

const router = express.Router();

router.get("/:ownerId", getOwnerCount);

router.put("/saved/increase", increaseSaved);

router.put("/saved/decrease", decreaseSaved);

router.put("/views/increase", increaseViews);

router.put("/contacts/increase", increaseContacts);

export default router;