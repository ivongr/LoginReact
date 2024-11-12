import { useSessionStore } from "../../login/domain/data-session";
import { loginSession } from './session-login';

export async function initLogin(
  email: string,
  password: string,
  setShowAlert: (show: boolean) => void,
  setAlertMessage: (message: string) => void
): Promise<void> {
  const { sessionData } = useSessionStore.getState();

  try {

    const user = await loginSession(email, password);

      await sessionData(user.email, user.password);
      setAlertMessage("¡Sesión iniciada con éxito!");
   
  } catch  {
    setAlertMessage("Correo electrónico o contraseña incorrectos.");
  } finally {
    setShowAlert(true);
  }
}
