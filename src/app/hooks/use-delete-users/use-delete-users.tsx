import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDeleteUser } from "../../services/delete-users";

export const useDeleteUsers = () => {
  const queryClient = useQueryClient();

  const deleteUserMutation = useMutation({
    mutationFn: fetchDeleteUser,
    onSuccess: () => {
      console.log("user deleted");
      queryClient.refetchQueries({ queryKey: ["get-users"] });
    },
    onError: () => console.log("error"),
  });

  return {
    deleteUserMutation,
  };
};
