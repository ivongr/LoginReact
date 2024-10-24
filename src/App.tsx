import  { useState } from "react";
import ShowAlert from "./showAlert"; 
import { loginSession } from './loginSession';
import { dataSession } from './dataSession';


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const loginSessionResult = await loginSession(email, password);
    if (loginSessionResult) {
      dataSession(email, password);
      setAlertMessage('¡Sesión iniciada con éxito!');
      setShowAlert(true);
    } else {
      setAlertMessage('Correo electrónico o contraseña incorrectos');
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
