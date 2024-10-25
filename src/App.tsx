import { useState, FormEvent } from "react";
import Alert from "./Alert"
import { initLogin } from "./initLogin";
import LoginForm from "./LoginForm";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [Alert, setAlert] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await initLogin(email, password, setAlert, setAlertMessage);
  };

  return (
    <>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmit}
      />
      {Alert && (
        <Alert message={alertMessage} setAlert={setAlert} />
      )}
    </>
  );
};

export default App;