export async function fetchPostUser(formData: FormData) {
  return await fetch("http://127.0.0.1:8000/users/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.get("firstName"),
      last_name: formData.get("lastName"),
      create_date: "2024-06-20 12:00:00",
    }),
  });
}

//OR
// export async function fetchPostUser(data: RequestInit) {
//   return await fetch("http://127.0.0.1:8000/users/", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: data.body,
//   });
// }
