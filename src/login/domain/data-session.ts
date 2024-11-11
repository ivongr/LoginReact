import { persist, PersistOptions } from 'zustand/middleware';
import { create, StateCreator } from 'zustand';

import { encryptValue } from '../../shared/domain/encrypt-value';
import { ISessionStore } from './entities/session-store-data';
import { parseSessionStoreData } from './validations/session-store-validations';

const initialvalue = {
  credentials: {
    email: "",
    password: ""
  },
  expirationDate: new Date(),
};

const stateCreator: StateCreator<ISessionStore> = (set) => ({
  ...initialvalue,

  sessionData: async (email, password) => {
    const encryptPassword = await encryptValue(password);
    const expirationDate = new Date(new Date().getTime() + 2 * 60 * 60 * 1000);
    set({
      credentials: {
        email,
        password: encryptPassword
      },
      expirationDate,

    });
  },
  logout: () => {
    set({ ...initialvalue });
  },
});

const persistOptions: PersistOptions<ISessionStore> = {
  name: 'session-storage',
  merge(persistedState, currentState) {
    try {
      const parsedState = parseSessionStoreData(persistedState);

      /**si no tiene fecha de expiracion */
      if (!parsedState.expirationDate) return currentState;


      const now = new Date();
      const isSessionAlive = parsedState.expirationDate >= now;

      /*si el token no expira */
      if (!isSessionAlive) return currentState;


      return {
        ...currentState,
        ...parsedState,
      };
    } catch {
      return currentState;
    }
  },
};

export const useSessionStore = create<ISessionStore>()(persist(stateCreator, persistOptions));
