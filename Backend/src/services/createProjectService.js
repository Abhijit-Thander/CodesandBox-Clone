import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";
import { execPromisified } from "../utils/exacUtility.js";
import directoryTree from "directory-tree";
import path from "path";

export const createProjectService = async () => {
  //create a unique id and then inside the projects folder create a new folder with that id.
  let projectId = uuidv4();

  await fs.mkdir(`./Projects/${projectId}`);
  const response = await execPromisified(
    "npm create vite@latest sandbox -- --template react",
    { cwd: `./Projects/${projectId}` },
  );

  return projectId;
};

export const getProjectTreeService = async (projectId) => {
  const projectPath = path.resolve(`./Projects/${projectId}`);
  const tree =  directoryTree(projectPath);
  return tree;
};
