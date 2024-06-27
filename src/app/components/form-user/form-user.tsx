"use client";
import { useAddUsers } from "../../hooks/use-add-users/use-add-users";
import { Button } from "../button/button";

export const FormUser = () => {
  const { handleSubmitForm } = useAddUsers();

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <label>First name :</label>
        <input data-testid="firstName" type="text" name="firstName" />
        Last Name :
        <input data-testid="LastName" type="text" name="lastName" />
        <Button name="Submit" type="submit" />
      </form>
    </>
  );
};
