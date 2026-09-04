import { useNavigate } from "react-router";
import { useCreateProject } from "../hooks/apis/mutations/createProject";

const CreateProject = () => {
  const { createProjectMutation, isPending } = useCreateProject();
  const navigate = useNavigate();

  const handleCreateProject = async () => {
    try {
      const res = await createProjectMutation();
      console.log(res);
      navigate(`/project/${res.data.data}`);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h1>Create Project</h1>
      <button onClick={handleCreateProject} className="px-4 py-2 border ">
        {isPending ? "Creating..." : "Create Project"}
      </button>
    </div>
  );
};

export default CreateProject;
