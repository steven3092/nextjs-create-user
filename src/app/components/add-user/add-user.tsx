"use client";
import { useAddUser } from "../../hooks/use-add-user";
import { Button } from "../button/button";

export const AddUser = () => {
  const { handleSubmitForm } = useAddUser();

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <label>First name :</label>
        <input type="text" name="firstName" />
        Last Name :
        <input type="text" name="lastName" />
        <Button name="Submit" type="submit" />
      </form>
    </>
  );
};
