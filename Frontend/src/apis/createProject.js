import axios from "../config/axiosConfig.js";

export const createProjectapi = async () => {
  try {
    const res = await axios.post("/api/v1/projects");
    return res;
  } catch (error) {
    throw error;
  }
};
