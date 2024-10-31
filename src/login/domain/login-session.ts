import { getUsers, } from '../../users/domain/list-users.js';
import { IUser } from '../../users/domain/user.js';
async function loginSession(email: string, password: string): Promise<IUser>{
  try {
    const formattedEmail = email.toLowerCase();
    const users = await getUsers();
    const user = users.find(
      user => user.email.toLowerCase() === formattedEmail && user.password === password
    );

    if(!user){
      throw new Error ("Correo electrónico o contraseña incorrectos")
    }
    return user;
  } catch (err:any) {
    alert(err.message);
    throw err;
  } finally {
    console.log('Proceso finalizado');
  }
}

export { loginSession };
