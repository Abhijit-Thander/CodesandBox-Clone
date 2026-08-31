import util from "util";
import { exec } from "child_process";
import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";

const execPromisified = util.promisify(exec);

export const createProjectController = async (req, res) => {
  //create a unique id and then inside the projects folder create a new folder with that id.
  let projectId = uuidv4();

  await fs.mkdir(`./Projects/${projectId}`);
  const response = await execPromisified(
    "npm create vite@latest firstApp -- --template react",
    { cwd: `./Projects/${projectId}` },
  );

  return res.status(201).json({ message: "Project Created", data: projectId });
};
