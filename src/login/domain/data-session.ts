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
}

const storage = createJSONStorage(() => sessionStorage, {
  reviver: (key, value) => {
    try {


      /*console.log(value + "objecto para validar")*/
      /*const string = JSON.stringify([value]);*/



      parse(validateSessionStorageSchema, value)


      const currentDate = new Date();
      const now = new Date(currentDate).toISOString();
      if (value.expirationDate <= now) {
        console.warn('La fecha de expiración ha pasado. Restableciendo los valores a iniciales.');
        return value.email = null;
      }

      return value;
    } catch (error) {
      console.error('Error al validar los datos almacenados:', error);
      return initialvalue;
    }
  },
  replacer: (key, value) => {
    return value;
  }
});




export const useSessionStore = create<ISessionStore>()(
  persist(
    (set) => ({
      ...initialvalue,
      SessionData: async (email, password) => {
        const encryptPassword = await encryptValue(password);
        const { expirationDate } = useAuthStore.getState();
        set({
          email: email,
          password: encryptPassword,
          expirationDate: expirationDate,
        });
      },
      logout: () => {
        set({ ...initialvalue, });
      },
    }),
    { name: 'session-storage', storage },
  ),
);
