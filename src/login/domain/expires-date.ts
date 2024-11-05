import {create} from 'zustand';

interface IAuthStore extends IAuthStoreData, IAuthStoreAction {

}
interface IAuthStoreData  {
  dateIso: string;
  dateLocal: string;
};

interface IAuthStoreAction  {
  updateDateIso: () => void;
  updateDateLocal: () => void;
};

export const useAuthStore = create<IAuthStore>((set) => ({
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




