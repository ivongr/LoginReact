import { parseLoginParams } from './validations/login-validations';
import { ILoginParams } from './entities/login-params';
import { loginSession } from './session-login';
import { dataSession, useSessionStore } from '../../domain/data-session';

export async function initLogin(
  email: string,
  password: string,
  setShowAlert: (show: boolean) => void,
  setAlertMessage: (message: string) => void
): Promise<void> {
  
  

  const loginParams: ILoginParams = { email, password };

  try {
    parseLoginParams(loginParams);
    const user = await loginSession(email, password); 
    /*dataSession(email, password);*/ 
    useSessionStore.getState.setSessionData({
      email,password
    })
    setAlertMessage("¡Sesión iniciada con éxito"); 
  } catch (error: any) {
    setAlertMessage(error.message);
  } finally {
    setShowAlert(true);
  }
}
