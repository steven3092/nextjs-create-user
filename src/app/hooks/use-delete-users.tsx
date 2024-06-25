import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDeleteUser } from "../services/delete-users";

export const useDeleteUsers = (userId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => fetchDeleteUser(userId),
    onSuccess: () => {
      console.log("user deleted");
      queryClient.refetchQueries({ queryKey: ["get-users"] });
    },
    onError: () => console.log("error"),
  });

  const handleDeleteUser = async () => {
    mutation.mutate();
  };

  return {
    handleDeleteUser,
  };
};
