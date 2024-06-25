"use client";
import { useGetUsers } from "../hooks/use-get-users";
import { InputDeleteUser } from "./input-delete-user";

export const Users = () => {
  const { users, isLoading, isError } = useGetUsers();

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error has occurred</p>}
      {users.map((user, index) => (
        <div key={index}>
          <li>{user.name}</li>
          <InputDeleteUser userId={user.id} />
        </div>
      ))}
    </div>
  );
};
