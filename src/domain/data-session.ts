import { persist } from 'zustand/middleware';

import { useAuthStore } from '../login/domain/expires-date';
import { encryptValue } from './encrypt-value';
import { create, createStore } from 'zustand';

/*export async function dataSession(email: string, password: string) {
  const passEnc = await encryptValue(password);
  const  {dateIso,dateLocal}  = useAuthStore.getState();
  const sessionData = {
    email,
    password: passEnc,
    expiresISO: dateIso, 
    expiresLocal: dateLocal,
  };
  localStorage.setItem('key', JSON.stringify(sessionData));
}*/

interface ISessionStore extends IAuthStoreData, IAuthStoreAction {

}
interface IAuthStoreData {
  data: {
    email: string,
    password: string
  }
};

interface IAuthStoreAction {
  setSessionData: (nextData: IAuthStoreData['data']) => void;
}


export const useSessionStore = createStore<ISessionStore>()(
  persist(
    (set) => ({
      data: { email: '', password: '' },
      setSessionData: (data) => set({ data })
    }),
    { name: 'session-storage' }
  ),
)

