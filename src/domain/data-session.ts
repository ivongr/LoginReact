import { persist } from 'zustand/middleware';
import { create } from 'zustand';
import { encryptValue } from './encrypt-value';
import { useAuthStore } from '../login/domain/expires-date';
import { IUserCredentials } from '../login/domain/entities/login-credentials';



interface ISessionStore extends IUserCredentials, ISessionStoreData, ISessionStoreAction {
}
interface ISessionStoreData {
  expirationDate: string;
}
interface ISessionStoreAction {
  SessionData: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
export const useSessionStore = create<ISessionStore>()(
  persist(
    (set) => ({
      email: '',
      password: '',
      expirationDate: '',
      SessionData: async (email, password) => {
        const encryptPassword = await encryptValue(password);
        const { expirationDate } = useAuthStore.getState();
        set({
          email: email,
          password: encryptPassword,
          expirationDate: expirationDate,
        })
      },
      logout: () => {
        set(() =>
        (
          {
            email: '',
            password: '',
            expirationDate: '',
          }
        ))

      }
    }),
    { name: 'session-storage' }
  )
);