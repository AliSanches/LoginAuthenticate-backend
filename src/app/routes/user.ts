import express from "express";
import verifyJWT from "../middleware/verifyJWT";

import { register, login, welcome } from "../controller/user";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/welcome/:id", verifyJWT, welcome);

export default router;
