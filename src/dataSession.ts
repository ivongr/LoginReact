import { expiresFormatIso, expiresLocal } from './expires';
import { encryptValue } from "./encryptValue";

export async function dataSession(email, password) {
  const passEnc = await encryptValue(password);
  const sessionData = {
    email,
    password: passEnc,
    expiresISO: expiresFormatIso(),
    expiresLocal: expiresLocal(),
  };
  localStorage.setItem("key", JSON.stringify(sessionData));
}
