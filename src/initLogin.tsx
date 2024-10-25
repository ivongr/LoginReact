import { loginSession } from './loginSession';
import { validateEmail } from './validateEmail';
import { validatePassword } from './validatePassword';
import { dataSession } from './dataSession';
import { Dispatch, SetStateAction } from 'react';



export async function initLogin(
  email: string,
  password: string,
  setShowAlert: Dispatch<SetStateAction<boolean>>,
  setAlertMessage: Dispatch<SetStateAction<string>>
): Promise<void> {
  if (!validateEmail(email)) {
    setAlertMessage("El correo electrónico no es válido");
    setShowAlert(true);
    return;
  }
  if (!validatePassword(password)) {
    setAlertMessage("La contraseña debe tener al menos 4 caracteres y máximo 16");
    setShowAlert(true);
    return;
  }

  try {

    const loginSessionResult = await loginSession(email, password);
    if (loginSessionResult) {
      dataSession(email, password);
      setAlertMessage('¡Sesión iniciada con éxito!');
      setShowAlert(true);
    } else {
      setAlertMessage('Correo electrónico o contraseña incorrectos');
      setShowAlert(true);
    }
  } catch (error: any) {
    setAlertMessage(error.message);
    setShowAlert(true);
    return;
  }

}
