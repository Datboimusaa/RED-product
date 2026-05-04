import { Router } from "express";
import usersModel from "../models/users.models.js";
import { Register, Login, ForgotPassword, ResetPassword, VerifyEmail } from "../controllers/users.controller.js";

const userRoutes = Router();

userRoutes.post("/register", Register);

userRoutes.post("/login", Login);

userRoutes.post("/forgot-password", ForgotPassword);

userRoutes.post("/reset-password", ResetPassword);

userRoutes.get("/verify-email", VerifyEmail)

export default userRoutes;
