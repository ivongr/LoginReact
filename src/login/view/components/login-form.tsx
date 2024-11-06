import { ILogin } from '../../domain/entities/login';
import { MouseEvent } from 'react';

// function loginUser() {
//   loginDependencies.service.login({ user: '', password: '' }).then(() => {
//     redirectToLoginPage();
//   });
// }

interface ILoginFormProps extends ILogin {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onClick: (event:MouseEvent<HTMLButtonElement>) =>void;
  onClickLo: (event:MouseEvent<HTMLButtonElement>) =>void;
}
function LoginForm({ email, setEmail, password, setPassword, onClick, onClickLo }: ILoginFormProps) {
  return (
    <form id='login-form' >
      <h1 className='title'>Login</h1>
      <label>
        <i className='fa-solid fa-envelope' aria-label='Icon Email'></i>
        <input
          type='email'
          id='email'
          placeholder='Ej: SukiZukaritas@gmail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <i className='fa-solid fa-lock'></i>
        <input
          type='password'
          id='password'
          aria-label='Icon Password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button id='btnlogin' className='btn success pulse-effect shadow-effect'
      onClick={onClick} type='submit'>
        Iniciar Sesión
      </button>

      <button id='btnlogout' className='btn grey pulse-effect shadow-effect' 
      onClickLo={onClick} type='submit'>
       Finalizar Sesion
      </button>
    </form>
  );
}

export default LoginForm;
