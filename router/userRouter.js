import express from "express";
import {
  createUser,
  getUserByEmail,
  getUserByPhone,
} from "../controller/userController.js";

const router = express.Router();
router.post("/", createUser);
router.get("/email/:email", getUserByEmail);
router.get("/phone/:phone", getUserByPhone);

export default router;
