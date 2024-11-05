import { create } from 'zustand';

interface IExpirationStore {
  expiresISO: string;
  expiresLocal: string;
  updateExpiration: () => void;
}

const useExpirationStore = create<IExpirationStore>((set) => ({
  expiresISO: '',
  expiresLocal: '',
  updateExpiration: () => {
    const globalTime = new Date();
    const expirationTime = globalTime.getTime() + 2 * 60 * 60 * 1000;

    set({
      expiresISO: new Date(expirationTime).toISOString(),
      expiresLocal: new Date(expirationTime).toLocaleString("es-MX", {
        timeZone: "America/Mexico_City",
      }),
    });
  },
}));

export default useExpirationStore;
