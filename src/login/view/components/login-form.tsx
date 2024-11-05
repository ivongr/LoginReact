import { ILogin } from '../../domain/entities/login';

// function loginUser() {
//   loginDependencies.service.login({ user: '', password: '' }).then(() => {
//     redirectToLoginPage();
//   });
// }

interface ILoginFormProps extends ILogin {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}
function LoginForm({ email, setEmail, password, setPassword, onSubmit }: ILoginFormProps) {
  return (
    <form id='login-form' onSubmit={onSubmit}>
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
      <button id='btnlogin' className='btn success pulse-effect shadow-effect' type='submit'>
        Iniciar Sesión
      </button>
    </form>
  );
}

export default LoginForm;
