import { listUsers } from "./listUsers.js";


async function loginSession(email:string, password:string) {
  try {
    const formattedEmail = email.toLowerCase();
    const users:any = await listUsers();
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
