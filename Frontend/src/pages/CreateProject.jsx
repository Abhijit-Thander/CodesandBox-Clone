import { useCreateProject } from "../hooks/apis/mutations/createProject";

const CreateProject = () => {
  const { createProjectMutation, isPending } = useCreateProject();

  const handleCreateProject = async () => {
    try {
      await createProjectMutation();
      console.log("Now we redirect to the editor");
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <h1>Create Project</h1>
      <button onClick={handleCreateProject}>
        {isPending ? "Creating..." : "Create Project"}
      </button>
    </div>
  );
};

export default CreateProject;
