"use client";
import React from "react";
import { useGetUsers } from "../../hooks/use-get-users";
import { useDeleteUsers } from "../../hooks/use-delete-users";

export const Users = () => {
  const { users, isLoading, isError } = useGetUsers();
  const { deleteUserMutation } = useDeleteUsers();

  const handleOnClickDeleteUser = async (userId: number) => {
    await deleteUserMutation.mutateAsync(userId, {
      onSuccess: () => console.log("User deleted"),
    });
    return;
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error has occurred</p>}
      {users.map((user, index) => (
        <div key={index}>
          <li data-testid={user.name}>{user.name}</li>
          <input
            value="delete"
            type="button"
            onClick={() => handleOnClickDeleteUser(user.id)}
          />
        </div>
      ))}
    </div>
  );
};
