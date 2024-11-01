import { container } from '../presentation/login-dependencies';
export async function initLogin(
  email: string,
  password: string,
  setShowAlert: (show: boolean) => void,
  setAlertMessage: (message: string) => void
): Promise<void> {
  const validateEmail = container.get<(email: string) => boolean>('validateEmail');
  const validatePassword = container.get<(password: string) => boolean>('validatePassword');
  const loginSession = container.get<(email: string, password: string) => Promise<void>>('loginSession');
  const dataSession = container.get<(email: string, password: string) => void>('dataSession');
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

    await loginSession(email, password);

    dataSession(email, password);
    setAlertMessage('¡Sesión iniciada con éxito!');
    setShowAlert(true);

  } catch (error: any) {
    setAlertMessage(error.message)
    setShowAlert(true);

  }

}
