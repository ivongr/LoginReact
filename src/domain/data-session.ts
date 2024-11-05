import { persist } from 'zustand/middleware';
import { create } from 'zustand';
import { encryptValue } from './encrypt-value';
import { useAuthStore } from '../login/domain/expires-date';

interface IAuthStoreData {
  email: string;
  password: string;  
  expiresISO: string;
  expiresLocal: string;
}

interface ISessionStore {
  data: IAuthStoreData;
  setSessionData: (email: string, password: string) => Promise<void>;
}

export const useSessionStore = create<ISessionStore>()(
  persist(
    (set) => ({
      data: {
        email: '',
        password: '',
        expiresISO: '',
        expiresLocal: '',
      },
      setSessionData: async (email, password) => {
        const passEnc = await encryptValue(password);
        const { dateIso, dateLocal } = useAuthStore.getState();
        set({
          data: {
            email,
            password: passEnc,
            expiresISO: dateIso,
            expiresLocal: dateLocal,
          }
        });
      }
    }),
    { name: 'session-storage' }
  )
);