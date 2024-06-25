"use server";

export async function fetchUsers() {
  const response = await fetch("http://127.0.0.1:8000/users/", {
    next: {
      revalidate: 0,
    },
  });
  // .then((response) => {
  //   if (!response.ok) {
  //     // Gérer les erreurs HTTP
  //     return Promise.reject(response);
  //   }
  //   return response.json(); // Convertir en JSON
  // })
  // .then((data) => {
  //   // Traiter les données JSON
  //   if (data.status === "success") {
  //     console.log("Succès:", data.data);
  //     return data.data;
  //   } else {
  //     console.log("Erreur:", data.errors);
  //   }
  // })
  // .catch((error) => {
  //   // Gérer les erreurs réseau ou autres
  //   console.error("Erreur réseau ou autre:", error);
  // });

  const data = await response.json();

  const users = data.data;

  return users;
}
