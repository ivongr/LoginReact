import React, { useState } from "react";
import ShowAlert from "./showAlert";
import { initLogin } from "./initLogin";
import LoginForm from "./LoginForm";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await initLogin(email, password, setShowAlert, setAlertMessage);
  };

  return (
    <div className="diagonal-gradient">
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
    </div>
  );
};

export default App;