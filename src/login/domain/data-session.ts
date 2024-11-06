import { persist } from 'zustand/middleware';
import { create } from 'zustand';
import { encryptValue } from '../../shared/domain/encrypt-value';
import { useAuthStore } from './expires-date';
import { ISessionStore } from './entities/login-session-Store';

const initialvalue ={
  email: null,
  password: null,
  expirationDate: null
}

const { expirationDate } = useAuthStore.getState();      
export const useSessionStore = create<ISessionStore>()(
  persist(
    (set) => ({
   ...initialvalue,
      SessionData: async (email,password) => {
        const encryptPassword = await encryptValue(password);
          set({
            email: email,
            password: encryptPassword,
            expirationDate: expirationDate,
          });
      },

      logout: () => {
        set({
          ...initialvalue,
        });
      },
    }),
    { name: 'session-storage'
    },
     /*const validateSessionStorage = name.map((names) => parse(validateSessionStorageSchema, users));*/
     
  )
);