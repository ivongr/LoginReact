// src/login/domain/init-login.ts
import { useSessionStore } from "../../login/domain/data-session";
import { ILoginParams } from './entities/login-params';
import { loginSession } from './session-login';
import { parseUserParams } from './validations/login-validations';

export async function initLogin(
  email: string,
  password: string,
  setShowAlert: (show: boolean) => void,
  setAlertMessage: (message: string) => void
): Promise<void> {
  const loginParams: ILoginParams = { email, password };
  const { sessionData } = useSessionStore.getState();

  try {
    parseUserParams(loginParams);
    const user = await loginSession(email, password);

    if (user) {
      await sessionData(user.email, user.password);
      setAlertMessage("¡Sesión iniciada con éxito!");
    }
  } catch (error: any) {
    setAlertMessage(error.message);
  } finally {
    setShowAlert(true);
  }
}
