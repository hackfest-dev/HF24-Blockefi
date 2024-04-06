import { Router } from "express";
import { handleLogin, handleSignUp } from "../controllers";

const router = Router()

router.post("/sign-up", handleSignUp)
router.post("/login", handleLogin)

export { router }