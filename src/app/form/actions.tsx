"use server";

export async function addUser(state: any, formData: FormData) {
  // Mutate data
  console.log(`user ${formData.get("firstName")} added`);
}
