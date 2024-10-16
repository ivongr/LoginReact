import React, { useState } from 'react';
import ShowAlert from './showAlert'; // El componente de la alerta
import { initLogin } from './initLogin'; // La función modificada

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const success = await initLogin(email, password, setShowAlert, setAlertMessage);
    if (success) {
      setAlertMessage("¡Sesión iniciada con éxito!");
      setShowAlert(true);
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
        <button id="btnlogin" className="btn success pulse-effect shadow-effect" type="submit">
          Iniciar Sesión
        </button>
        {showAlert && <ShowAlert message={alertMessage} setShowAlert={setShowAlert} />}
      </form>
    </div>
  );
}

export default App;
