import { FormEvent } from "react";
import { usePostUsers } from "./use-post-users";

export const useAddUser = () => {
  const { createUserMutation } = usePostUsers();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    await createUserMutation.mutateAsync(formData, {
      onSuccess: () => console.log("User created"),
    });
  };

  return {
    handleSubmitForm,
  };
};
