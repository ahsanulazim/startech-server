import express from "express";
import {
  createUser,
  getUserByEmail,
  getUserByPhone,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();
router.post("/", createUser);
router.get("/email/:email", getUserByEmail);
router.get("/phone/:phone", getUserByPhone);
router.put("/email/:email", updateUser);

export default router;
