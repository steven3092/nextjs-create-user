import { QueryClient } from "@tanstack/query-core";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Users } from "./users";
import { QueryClientProvider } from "@tanstack/react-query";

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

const mockUsers = jest.fn().mockReturnValue([
  {
    id: 1,
    name: "lorem ipsum",
    last_name: "lorem ipsum",
    create_date: "lorem ipsum",
  },
]);

jest.mock("../../hooks/use-get-users", () => ({
  useGetUsers: () => ({
    users: mockUsers(),
  }),
}));

const mockDeleteUserMutation = jest.fn();

jest.mock("../../hooks/use-delete-users", () => ({
  useDeleteUsers: () => ({
    deleteUserMutation: mockDeleteUserMutation(),
  }),
}));

describe("Users", () => {
  it("should appear in the DOM", () => {
    render(<Users />);

    const user = screen.getByTestId("lorem ipsum");

    expect(user).toBeInTheDocument();
  });
});

describe("Click for deleting user", () => {
  const user = userEvent.setup();

  it("should call useDeleteUsers() hook", () => {
    render(<Users />);

    const deleteButton = screen.getByText("delete");

    user.click(deleteButton);

    expect(mockDeleteUserMutation).toHaveBeenCalled();
  });
});
