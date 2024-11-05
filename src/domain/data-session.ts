import { encryptValue } from './encrypt-value';

export async function dataSession(email: string, password: string) {
  const passEnc = await encryptValue(password);
  const sessionData = {
    email,
    password: passEnc,
    expiresISO: new Date().toISOString(), 
  };
  localStorage.setItem('key', JSON.stringify(sessionData));
}
