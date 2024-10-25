import { useState, FormEvent } from "react";
import ShowAlert from "./showAlert";
import { initLogin } from "./initLogin";
import LoginForm from "./LoginForm";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await initLogin(email, password, setShowAlert, setAlertMessage);
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
      {showAlert && (
        <ShowAlert message={alertMessage} setShowAlert={setShowAlert} />
      )}
    </>
  );
};

export default App;