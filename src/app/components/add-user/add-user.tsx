"use client";
import { useAddUser } from "../../hooks/use-add-user";
import { Button } from "../button/button";

export const AddUser = () => {
  const { handleSubmitForm } = useAddUser();

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
