import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPostUser } from "../../services/post-users";

export const usePostUsers = () => {
  const queryClient = useQueryClient();

  const createUserMutation = useMutation({
    mutationFn: fetchPostUser,
    onSuccess: () => {
      console.log("user created");
      queryClient.refetchQueries({ queryKey: ["get-users"] });
    },
    onError: () => console.log("Error"),
  });

  return {
    createUserMutation,
  };
};
