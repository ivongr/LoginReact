import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from 'zustand';
import { encryptValue } from '../../shared/domain/encrypt-value';
import { useAuthStore } from './expires-date';
import { ISessionStore } from './entities/login-session-store';
import { validateSessionStorageSchema } from './validations/validate-session-storage-schema';
import { parse } from 'valibot';

const initialvalue = {
  email: null,
  password: null,
  expirationDate: null
};
const storage = createJSONStorage(() => localStorage,
  {
    reviver: (key, value) => {
      try {
        parse(validateSessionStorageSchema, value);
        const currentDate = new Date().toISOString();
        if (value.expirationDate <= currentDate) {
          console.warn('La fecha de expiración ha pasado. Restableciendo los valores a iniciales.');
          return initialvalue;
        } return value;
      }
      catch (error) {
        console.error
          ('Error al validar los datos almacenados:', error);
        return initialvalue;
      }
    },
    replacer: (key, value) => value,
  });

export const useSessionStore = create<ISessionStore>()(
  persist(
    (set) => ({
      ...initialvalue,
      SessionData: async (email, password) => {
        const encryptPassword = await encryptValue(password);
        const expirationDate = new Date(new Date().getTime() + 2 * 60 * 60 * 1000).toISOString();
             set({
          email,
          password: encryptPassword,
          expirationDate,
        });
      },
      logout: () => {
        set({ ...initialvalue });
      },
    }),
    { name: 'session-storage', storage },  // El nombre es solo para identificar en el storage
  ),
);
