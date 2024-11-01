import { getUsers, } from '../../users/domain/get-users';
import { IUser } from '../../users/domain/user';
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
