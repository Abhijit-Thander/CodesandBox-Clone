import express from "express";
import {
  createProjectController,
  getProjectTree,
} from "../../controllers/createProjectControllers.js";

const router = express.Router();

// router.get("/", createProjectController);
router.post("/", createProjectController);
router.get("/:projectId", getProjectTree);

export default router;
