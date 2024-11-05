import {create} from 'zustand';


type State = {
  dateIso: string;
};

type Action = {
  updateDateIso: () => void;
};

export const useDateStore = create<State & Action>((set) => ({
  dateIso: '',
  updateDateIso: () => {
    const globalTime = new Date();
    const expirationTime = globalTime.getTime() + 2 * 60 * 60 * 1000; 
    set({ dateIso: new Date(expirationTime).toISOString() });
  },
}));




