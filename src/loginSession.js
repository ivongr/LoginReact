import { listUsers } from "./listUsers.js";


async function loginSession(email, password) {
  try {
    const formattedEmail = email.toLowerCase();
    const users = await listUsers();
    return users.some(user =>
      user.email.toLowerCase() === formattedEmail
      && user.password === password);
  } catch (error) {
    alert(error.message)
  } finally {
    console.log("Proceso finalizado")
  }
}


export { loginSession };
