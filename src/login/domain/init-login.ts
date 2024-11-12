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

    if (user) {
      await sessionData(user.email, user.password);
      setAlertMessage("¡Sesión iniciada con éxito!");
    } else {
      setAlertMessage("Correo electrónico o contraseña incorrectos.");
    }
  } catch (error: any) {
    setAlertMessage(error.message);
  } finally {
    setShowAlert(true);
  }
}
