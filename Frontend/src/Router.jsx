import { createBrowserRouter } from "react-router";
import CreateProject from "./pages/CreateProject";
import Home from "./pages/Home";
import ProjectPlayground from "./pages/ProjectPlayground";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-project",
    element: <CreateProject />,
  },
  {
    path: "/project/:projectId",
    element: <ProjectPlayground />,
  },
]);
