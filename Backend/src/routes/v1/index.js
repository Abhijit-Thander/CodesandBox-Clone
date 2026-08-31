import express from "express";
import createProject from "./createProjects.js";

const router = express.Router();

router.use("/projects", createProject);

router.get("/ping", (req, res) => {
  res.json({ message: "Pong" });
});

export default router;
