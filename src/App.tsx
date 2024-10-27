import { useState, FormEvent } from "react";
import Alert from "./Alert"
import { initLogin } from "./initLogin";
import LoginForm from "./LoginForm";

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
        <Alert message={alertMessage} setAlert={setshowAlert} />
      )}
    </>
  );
};

export default App;