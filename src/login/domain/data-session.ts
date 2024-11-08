import { persist, PersistOptions } from 'zustand/middleware';
import { create, StateCreator } from 'zustand';

import { encryptValue } from '../../shared/domain/encrypt-value';
import { ISessionStore } from './entities/login-session-store';
import { parseSessionStoreData } from './validations/session-store-validations';

const initialvalue = {
  email: null,
  password: null,
  expirationDate: null,
};

const stateCreator: StateCreator<ISessionStore> = (set) => ({
  ...initialvalue,

  credentials: {
    email,
    password,
    expirationDate
  }

  sessionData: async (email, password) => {
    const encryptPassword = await encryptValue(password);
    const expirationDate = new Date(new Date().getTime() + 2 * 60 * 100);
    set({
      email,
      password: encryptPassword,
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

      /*validacion de la fecha*/

      const isSessionAlive = new Date(parsedState.expirationDate).getTime() >= Date.now();

      /*si es token no expira */
      if (!isSessionAlive) return currentState;

      return {
        ...currentState,
        ...parsedState,
      };
    } catch {
      return currentState
    }
  },
};

export const useSessionStore = create<ISessionStore>()(persist(stateCreator, persistOptions));
