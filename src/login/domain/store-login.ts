import {create, StateCreator} from 'zustand';

interface ICredentialsStore extends ICredentialsStoreData, ICredentialsAction{

}
interface ICredentialsStoreData{
  email: string
  password: string
}

interface ICredentialsAction {
  setEmail: (email:string) => void,
  setPassword: (password:string) => void
}

const loginForm: StateCreator<ICredentialsStore> = (set) => ({
  email: '',
  password: '',
  setEmail:(email) => set({email}),
  setPassword: (password) => set({password}),
})
export const useLoginStore = create<ICredentialsStore>()((loginForm));
