import {create} from 'zustand';

interface IAuthStore extends IAuthStoreData, IAuthStoreAction {

}
interface IAuthStoreData  {
  expirationDate: string;
  
};

interface IAuthStoreAction  {
  updateDate: () => void;
};

export const useAuthStore = create<IAuthStore>((set) => ({
  expirationDate: '',
  updateDate: () => {
    const globalTime = new Date();
    const expirationTime = globalTime.getTime() + 2 ; 
    set({ expirationDate : new Date(expirationTime).toISOString() });
  }
}));




