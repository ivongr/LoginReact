import React from 'react';

interface LoginFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ email, setEmail, password, setPassword, onSubmit }) => {
  return (
    <form id="login-form" onSubmit={onSubmit}>
      <h1 className="title">Login</h1>
      <label>
        <i className="fa-solid fa-envelope" aria-label="Icon Email"></i>
        <input
          type="email"
          id="email"
          placeholder="Ej: SukiZukaritas@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <i className="fa-solid fa-lock"></i>
        <input
          type="password"
          id="password"
          aria-label="Icon Password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button id="btnlogin" className="btn success pulse-effect shadow-effect" type="submit">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default LoginForm;
