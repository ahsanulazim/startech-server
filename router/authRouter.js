import express from "express";
import { postLogin, postLogout, status } from "../controller/authController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();
router.post("/login", postLogin)
router.post('/logout', postLogout)
router.get('/status', auth, status)

export default router;