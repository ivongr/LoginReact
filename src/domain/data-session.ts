import { useDateStore } from '../login/domain/expires-date';
import { encryptValue } from './encrypt-value';

export async function dataSession(email: string, password: string) {
  const passEnc = await encryptValue(password);
  const  {dateIso,dateLocal}  = useDateStore.getState();
  const sessionData = {
    email,
    password: passEnc,
    expiresISO: dateIso, 
    expiresLocal: dateLocal,
  };
  localStorage.setItem('key', JSON.stringify(sessionData));
}
