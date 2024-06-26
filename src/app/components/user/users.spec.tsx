import { QueryClient } from "@tanstack/query-core";
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

describe("Users", () => {
  it("should appear in the DOM", () => {
    customRender(<Users />);

    const user = screen.getByTestId("lorem ipsum");

    expect(user).toBeInTheDocument();
  });
});
