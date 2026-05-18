import express from "express";
import {register, login, logout, getProfile} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.middleware.js";

const router = express.Router();

router.post("/register", register);

router.post('/login', login);

router.post('/logout', logout);

router.get('/profile',verifyToken , getProfile);

export default router;