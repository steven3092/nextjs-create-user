import { render, screen } from "@testing-library/react";
import { FormUser } from "./form-user";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const customRender = (children: React.ReactElement) => {
  const testQueryClients = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return render(
    <QueryClientProvider client={testQueryClients}>
      {children}
    </QueryClientProvider>
  );
};

const mockHandleSubmitForm = jest.fn();

jest.mock("../../hooks/use-add-users/use-add-users", () => ({
  useAddUsers: () => ({
    handleSubmitForm: mockHandleSubmitForm(),
  }),
}));

describe("When fill the form", () => {
  const user = userEvent.setup();
  it("should call handleSubmitForm function", () => {
    customRender(<FormUser />);

    const firstNameInput = screen.getByTestId("firstName");
    const lastNameInput = screen.getByTestId("LastName");

    user.type(firstNameInput, "lorem");
    user.type(lastNameInput, "ipsum");

    const submitButton = screen.getByText("Submit");

    user.click(submitButton);

    expect(mockHandleSubmitForm).toHaveBeenCalledTimes(1);
  });
});
