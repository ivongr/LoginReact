import { FormEvent, useState } from "react";

import { initLogin } from "../../login/domain/init-login";
import { logoutLogin } from "../../login/domain/logoutLogin";
import { useLoginStore } from "../../login/domain/store-login";
import LoginForm from '../../login/view/components/login-form';
import Alert from "./alert";

const App = () => {
  const { email, setEmail, password, setPassword } = useLoginStore();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  const handleSubmitLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await initLogin(email, password, setShowAlert, setAlertMessage);
  };

  const handleLogoutClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    await logoutLogin(setShowAlert, setAlertMessage);
  };

  return (
    <>
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        onSubmit={handleSubmitLogin}
        onLogout={handleLogoutClick}
      />
      {showAlert && (
        <Alert message={alertMessage} setShowAlert={setShowAlert} />
      )}
    </>
  );
};

export default App;
