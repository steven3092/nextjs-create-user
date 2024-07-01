import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("http://127.0.0.1:8000/users", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json([
      {
        id: 1,
        firstName: "John",
        lastName: "Maverick",
        create_date: "2024-06-20 12:00:00",
      },
    ]);
  }),
];
