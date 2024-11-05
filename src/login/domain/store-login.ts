
import {create} from 'zustand';


type State = {
  email: string
  password: string
}

type Action = {
  setEmail: (email: State['email']) => void,
  setPassword: (password: State['password']) => void
}

export const useLoginStore = create<State & Action>((set) => ({
  email: '',
  password: '',
  setEmail: (email) => set(() => ({email:email})),
  setPassword: (password) => set(() => ({ password:password})),
}));


