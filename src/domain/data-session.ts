import { encryptValue } from "./encrypt-value";
import useExpirationStore from "../login/domain/expires-date";

export async function dataSession(email: string, password: string): Promise<void> {
  const { updateExpiration, expiresISO, expiresLocal } = useExpirationStore.getState();

  // Actualiza las fechas de expiración
  updateExpiration();

  // Encripta la contraseña
  const passEnc = await encryptValue(password);

 
  const sessionData = {
    email,
    password: passEnc,
    expiresISO,
    expiresLocal,
  };


  localStorage.setItem("key", JSON.stringify(sessionData));
}
