import { useMutation } from "@tanstack/react-query";
import { createProjectapi } from "../../../apis/createProject";

export const useCreateProject = () => {
  const { isSuccess, isPending, error, mutateAsync } = useMutation({
    mutationFn: createProjectapi,
    onSuccess: (data) => console.log("Project Created Successfully", data.data),
    onError: (err) => console.log(err),
  });

  return { isPending, isSuccess, error, createProjectMutation: mutateAsync };
};
