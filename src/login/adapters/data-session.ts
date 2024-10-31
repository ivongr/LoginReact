import { expiresFormatIso, expiresLocal } from './expires-date';
import { encryptValue } from "./encrypt-value";

export async function dataSession(email:string, password:string):Promise<void> {
  const passEnc = await encryptValue(password);
  const sessionData = {
    email,
    password: passEnc,
    expiresISO: expiresFormatIso(),
    expiresLocal: expiresLocal(),
  };
  localStorage.setItem("key", JSON.stringify(sessionData));
}
