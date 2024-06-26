import { useDeleteUsers } from "../../hooks/use-delete-users";

export const InputDeleteUser = ({ userId }: { userId: number }) => {
  const { handleDeleteUser } = useDeleteUsers(userId);

  const handleOnClickDeleteUser = async () => {
    await handleDeleteUser();
    return;
  };

  return (
    <>
      <input value="delete" type="button" onClick={handleOnClickDeleteUser} />
    </>
  );
};
