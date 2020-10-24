import metaRouter from "./meta.router";
import authRouter from "./auth.router";
import express from "express";

const router = express.Router();
export default router;

router.use("/auth", authRouter);
router.use("/", metaRouter);
