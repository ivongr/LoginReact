import { FormEvent} from 'react';

export interface ILogin {
    email: string;
    setEmail: (email:string) => void;
    password: string;
    setPassword:(email:string) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  }
