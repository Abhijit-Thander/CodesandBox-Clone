import express from "express";
import { createProjectController } from "../../controllers/createProjectControllers.js";

const router = express.Router();

router.post("/", createProjectController);

export default router;
