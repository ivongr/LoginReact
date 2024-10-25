import { loginSession } from './loginSession';
import { validateEmail } from './validateEmail';
import { validatePassword } from './validatePassword';
import { dataSession } from './dataSession';



export async function initLogin(email, password, setShowAlert, setAlertMessage) {
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

    /*const loginSessionResult = await loginSession(email, password);
    if (loginSessionResult) {
      dataSession(email, password);
      setAlertMessage('¡Sesión iniciada con éxito!');
      setShowAlert(true);
    } else {
      setAlertMessage('Correo electrónico o contraseña incorrectos');
      setShowAlert(true);
    }
  } catch (error) {
    setAlertMessage(error.message);
    setShowAlert(true);
    return;*/
  
   /* const users = await listUsers();
    const user = users.find(user => user.email === email.toLowerCase() && user.password === password);

    if (user) {
      await dataSession(email, password);
      return true;
    } else {
      setAlertMessage("Correo electrónico o contraseña incorrectos");
      setShowAlert(true);
      return;
    }*/
  } catch (error) {
    setAlertMessage(error.message);
    setShowAlert(true);
    return;
  }
}
