import { getUsers,users } from './listUsers.js';

async function loginSession(email: string, password: string): Promise<users>{
  try {
    const formattedEmail = email.toLowerCase();
    const users: any = await getUsers();
    return users.some(
      (user: any) => user.email.toLowerCase() === formattedEmail && user.password === password
    );
  } catch (error: any) {
    alert(error.message);
  } finally {
    console.log('Proceso finalizado');
  }
}

export { loginSession };
