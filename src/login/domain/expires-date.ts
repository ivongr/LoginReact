import {create} from 'zustand';

interface IAuthStore extends IAuthStoreData, IAuthStoreAction {

}
interface IAuthStoreData  {
  expirationDate: string;
  
};

interface IAuthStoreAction  {
  updateDateIso: () => void;

};

export const useAuthStore = create<IAuthStore>((set) => ({
  expirationDate: '',
  updateDateIso: () => {
    const globalTime = new Date();
    const expirationTime = globalTime.getTime() + 2 * 60 * 60 * 1000; 
    set({ expirationDate : new Date(expirationTime).toISOString() });
  }
}));




