import express from "express";

import { register } from "../controller/user";

const router = express.Router();

router.post("/register", register);

export default router;
