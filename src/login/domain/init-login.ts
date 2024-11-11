import { IUserParams } from './entities/user-params';
import { loginSession } from './session-login';
import { parseUserParams } from './validations/login-validations';

export async function initLogin(
  email: string,
  password: string,
  setShowAlert: (show: boolean) => void,
  setAlertMessage: (message: string) => void
): Promise<void> {
  const loginParams: IUserParams = { email, password };


  try {
    parseUserParams(loginParams);
     await loginSession(email, password);

      setAlertMessage("¡Sesión iniciada con éxito!");
  
  } catch (error: any) {
    setAlertMessage(error.message);
  } finally {
    setShowAlert(true);
  }
}
