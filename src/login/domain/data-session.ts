import { persist, PersistOptions } from 'zustand/middleware';
import { create, StateCreator } from 'zustand';

import { encryptValue } from '../../shared/domain/encrypt-value';
import { ISessionStore } from './entities/login-session-store';
import { parseSessionStoreData } from './validations/session-store-validations';

const initialvalue = {
  email: 'suki',
  password: null,
  expirationDate: null,
};

const stateCreator: StateCreator<ISessionStore> = (set) => ({
  ...initialvalue,
  SessionData: async (email, password) => {
    const encryptPassword = await encryptValue(password);
    const expirationDate = new Date(new Date().getTime() + 2 * 60 * 100).toISOString();
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
    const parsedState = parseSessionStoreData(persistedState);

    if (!parsedState.expirationDate) return currentState;

    const isSessionAlive = new Date(parsedState.expirationDate).getTime() >= Date.now();

    if (!isSessionAlive) return currentState;

    return {
      ...currentState,
      ...parsedState,
    };
  },
};

export const useSessionStore = create<ISessionStore>()(persist(stateCreator, persistOptions));
