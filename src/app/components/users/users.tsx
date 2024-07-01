"use client";
import React from "react";
import "./users.scss";
import { useGetUsers } from "../../hooks/use-get-users/use-get-users";
import { useDeleteUsers } from "../../hooks/use-delete-users/use-delete-users";

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
    <div className="users-block">
      {isLoading && <p>Loading...</p>}
      {isError && <p>An error has occurred</p>}
      {users &&
        users.map((user, index) => (
          <div className="users-list" key={index}>
            <div
              className="delete-button"
              data-testid="delete-user-button"
              onClick={() => handleOnClickDeleteUser(user.id)}
            />
            <div
              className="user"
              data-testid={`${user.name} ${user.last_name}`}
            >
              {user.name} {user.last_name}
            </div>
          </div>
        ))}
    </div>
  );
};
