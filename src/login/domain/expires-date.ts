import {create} from 'zustand';


type State = {
  dateIso: string;
  dateLocal: string;
};

type Action = {
  updateDateIso: () => void;
  updateDateLocal: () => void;
};

export const useDateStore = create<State & Action>((set) => ({
  dateIso: '',
  updateDateIso: () => {
    const globalTime = new Date();
    const expirationTime = globalTime.getTime() + 2 * 60 * 60 * 1000; 
    set({ dateIso: new Date(expirationTime).toISOString() });
  },
  dateLocal:'',
  updateDateLocal: () => {
    const globaltime = new Date();

    const expiresLocal = new Date(globaltime.getTime() + 2 * 60 * 60 * 1000 );
      set({ dateLocal: expiresLocal.toLocaleString("es-MX", { timeZone: "America/Mexico_City" }) });
  },
}));




