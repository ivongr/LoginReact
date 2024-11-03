import { useState, FormEvent } from "react";
import Alert from "./alert"
import { initLogin } from "../../login/domain/init-login";
import LoginForm from "../login/view/login-form";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showAlert, setshowAlert] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await initLogin(email, password, setshowAlert, setAlertMessage);
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
        <Alert message={alertMessage} setShowAlert={setshowAlert} />
      )}
    </>
  );
};

export default App;