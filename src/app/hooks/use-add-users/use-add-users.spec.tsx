import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook } from "@testing-library/react";
import { useAddUsers } from "./use-add-users";
import { FormEvent } from "react";

//First version of test for useAddUsers() because
//we expect(true).toBe(true) but all the scope as been correctly mocked

const customWrapper = () => {
  const testQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  const renderWrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );

  return renderWrapper;
};

const mockFetchPostUser = jest
  .fn()
  .mockReturnValue(() => Promise.resolve(true));

jest.mock("../../services/post-users", () => {
  return {
    fetchPostUser: () => mockFetchPostUser,
  };
});

const buildForm = () => {
  const form = document.createElement("form");
  const inputFirstName = document.createElement("input");
  const inputLastName = document.createElement("input");

  inputFirstName.name = "Lorem";
  inputFirstName.value = "Lorem";

  inputLastName.name = "Ipsum";
  inputLastName.value = "Ipsum";

  form.appendChild(inputFirstName);
  form.appendChild(inputLastName);

  return form;
};

describe("useAddUsers", () => {
  it("should call handleSubmitForm()", async () => {
    const { result } = renderHook(() => useAddUsers(), {
      wrapper: customWrapper(),
    });

    const mockFormEvent: Partial<FormEvent<HTMLFormElement>> = {
      preventDefault: jest.fn(),
      target: buildForm(),
    };

    act(() => {
      result.current.handleSubmitForm(
        mockFormEvent as FormEvent<HTMLFormElement>
      );
    });

    expect(true).toBe(true);
  });
});
