import express from "express";
import createProject from "./createProjects.js";

const router = express.Router();

router.use("/projects", createProject);

export default router;
