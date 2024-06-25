export async function fetchDeleteUser(userId: number) {
  return await fetch(`http://127.0.0.1:8000/users/${userId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}
