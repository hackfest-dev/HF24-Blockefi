import { Router } from "express";
import { getAuthUser, handleLogin, handleSignUp } from "../controllers";
import { authUser } from "../middlewares/auth.middleware";

const router = Router()

router.post("/sign-up", handleSignUp)
router.post("/login", handleLogin)
router.get("/user", authUser, getAuthUser)

export { router }