import React, { useState, useEffect } from 'react';
import { initLogin } from './initLogin';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const success = await initLogin(email, password);
      if (success) {
        alert("¡Sesión iniciada con éxito!");
      } else {
        alert("Correo electrónico o contraseña incorrectos");
      }
    } catch (error) {
      alert(error.message);
    } 
  };

  return (
    <div className="diagonal-gradient">


        <form id="login-form" onSubmit={handleSubmit}>
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
          <button
            id="btnlogin"
            className="btn success pulse-effect shadow-effect"
            type="submit">
            Iniciar Sesión
          </button>
        </form>
    </div>
  );
}

export default App;
