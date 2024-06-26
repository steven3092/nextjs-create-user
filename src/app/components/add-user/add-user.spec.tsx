import { render, screen } from "@testing-library/react";
import { AddUser } from "./add-user";
import userEvent from "@testing-library/user-event";

const mockHandleSubmitForm = jest.fn();

jest.mock("../../hooks/use-add-user", () => ({
  useAddUser: () => ({
    handleSubmitForm: mockHandleSubmitForm(),
  }),
}));

describe("When fill the form", () => {
  const user = userEvent.setup();
  it("should call handleSubmitForm function", () => {
    render(<AddUser />);

    const firstNameInput = screen.getByTestId("firstName");
    const lastNameInput = screen.getByTestId("LastName");

    user.type(firstNameInput, "lorem");
    user.type(lastNameInput, "ipsum");

    const submitButton = screen.getByText("Submit");

    user.click(submitButton);

    expect(mockHandleSubmitForm).toHaveBeenCalledTimes(1);
  });
});
