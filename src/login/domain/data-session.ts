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


export const useSessionStore = create<ISessionStore>()(
  persist(
    (set) => ({
      ...initialvalue,
      SessionData: async (email, password) => {
        const { expirationDate } = useAuthStore.getState();
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
    {
      name: 'session-storage',
      /*storage: {
        getItem: async key => {
          return JSON.parse(
            (key, value) => {
              const validateSessionStorage = name.map((names) => parse(validateSessionStorageSchema, users));
              if (localStorage == undefined) {
                set({
                  ...initialvalue,
                });
              }
            }
          )
        }
      }*/

     /*storage: createJSONStorage(() => sessionStorage, {
        reviver: (key, value) => {
          const validateJson = value.map((values: any) => parse(validateSessionStorageSchema, values));
          if (validateJson === undefined){
        return SessionData();
           
          }
        }
      })*/



    },
  )
);


  /*const storage = createJSONStorage(() => sessionStorage, {
        reviver: (key, value) => {
          const validateJson = value.map((values: any) => parse(validateSessionStorageSchema, values));
          if (value == null){
        return initialvalue;
          }
          return value;
        }
      })*/

