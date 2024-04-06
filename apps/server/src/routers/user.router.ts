import { Router } from "express";
import { findUserByEmail } from "../controllers";

const router = Router()

router.get("/:email", findUserByEmail)

export { router }