import { useParams } from "react-router";
import EditorLayout from "../components/ui/EditorComponents/EditorLayout";

const ProjectPlayground = () => {
  const { projectId } = useParams();

  return (
    <div>
      <EditorLayout />
    </div>
  );
};

export default ProjectPlayground;
