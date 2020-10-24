import metaRouter from "./meta.router";
import express from "express";

const router = express.Router();
export default router;

router.use("/", metaRouter);
