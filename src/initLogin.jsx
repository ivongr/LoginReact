import { listUsers } from './listUsers';
import { validateEmail } from './validateEmail';
import { validatePassword } from './validatePassword';
import { dataSession } from './dataSession';

export async function initLogin(email, password, setShowAlert, setAlertMessage) {
  if (!validateEmail(email)) {
    setAlertMessage('El correo electrónico no es válido');
    setShowAlert(true);
    return false;
  }
  if (!validatePassword(password)) {
    setAlertMessage('La contraseña debe tener al menos 4 caracteres y máximo 16');
    setShowAlert(true);
    return false;
  }

  try {
    const users = await listUsers();
    const user = users.find(user => user.email === email.toLowerCase() && user.password === password);

    if (user) {
      await dataSession(email, password);
      return true;
    } else {
      setAlertMessage('Correo electrónico o contraseña incorrectos');
      setShowAlert(true);
      return false;
    }
  } catch (error) {
    setAlertMessage(error.message);
    setShowAlert(true);
    return false;
  }
}
