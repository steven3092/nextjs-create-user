"use client";
import { useAddUsers } from "../../hooks/use-add-users/use-add-users";
import "./form-user.scss";

export const FormUser = () => {
  const { handleSubmitForm } = useAddUsers();

  return (
    <form id="userForm" className="form-user" onSubmit={handleSubmitForm}>
      <div className="first-name">
        <label>First name : </label>
        <input data-testid="firstName" type="text" name="firstName" required />
      </div>
      <div className="last-name">
        <label>Last Name : </label>
        <input data-testid="LastName" type="text" name="lastName" required />
      </div>
      <input
        className="user-submit"
        value="Add user"
        name="submit"
        type="submit"
      />
    </form>
  );
};
