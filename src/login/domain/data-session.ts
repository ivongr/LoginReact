import { createJSONStorage, persist } from 'zustand/middleware';
import { create } from 'zustand';
import { encryptValue } from '../../shared/domain/encrypt-value';
import { ISessionStore } from './entities/login-session-store';
import { validateSessionStorageSchema } from './validations/validate-session-storage-schema';
import { parse, value } from 'valibot';

const initialvalue = {
  email: null,
  password: null,
  expirationDate: null
};
const storage = createJSONStorage(() => localStorage,
  {
    reviver: (key, value) => {
      

        /*Invalid type: Espera un objeto pero recibe ..."
        /* parse(validateSessionStorageSchema, value);*/

        /*const json = localStorage.getItem('session-storage')
        const jsonS = JSON.stringify(json)
        const jsonP = JSON.parse(jsonS) ****
        console.log(jsonP)
        console.log(typeof jsonP)
        console.log(json)
        /*Invalid type: Espera un objecto pero recibe "0"
        const validatedUsers = Object.keys(jsonP).map( json => parse(validateSessionStorageSchema, json));*/
        
        const currentDate = new Date().toISOString();
        if (value.expirationDate <= currentDate) {
          console.log('Sesión terminada.');
          return initialvalue;
        } return value;
     
    },
   
  });
export const useSessionStore = create<ISessionStore>()(
  persist(
    (set) => ({
      ...initialvalue,
      SessionData: async (email, password) => {
        const encryptPassword = await encryptValue(password);
        const expirationDate = new Date(new Date().getTime() + 2 * 60 *100).toISOString();
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
    { name: 'session-storage', storage },
  ),
);
