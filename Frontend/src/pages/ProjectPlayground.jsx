import React from "react";
import { useParams } from "react-router";
import EditorComponent from "../components/ui/EditorComponents/MonacoEditor";

const ProjectPlayground = () => {
  const { projectId } = useParams();

  return (
    <div>
      <EditorComponent />
      {/* <EditorLayout/> */}
    </div>
  );
};

export default ProjectPlayground;
