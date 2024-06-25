import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/get-users";
import { UserDTO } from "../interfaces/users.dto.interface";

export function useGetUsers() {
  const query = useQuery({
    queryKey: ["get-users"],
    queryFn: () => fetchUsers(),
    retry: 0,
  });

  const users: UserDTO[] = query.data;

  return {
    users,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}
