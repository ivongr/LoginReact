import { useState, FormEvent } from "react";
import Alert from "./alert";
import { initLogin } from "../../login/domain/init-login";
import LoginForm from '../../login/view/components/login-form';
import { useLoginStore } from "../../login/domain/store-login";
import { useSessionStore } from "../../login/domain/data-session";
import { logoutLogin } from "../../login/domain/logoutLogin";
import { useAuthStore } from "../../login/domain/expires-date";

const App = () => {
  const { email, setEmail, password, setPassword } = useLoginStore();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
  const { SessionData } = useSessionStore();
  const { updateDate } = useAuthStore();

  const handleSubmitLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

   
      await initLogin(email, password, setShowAlert, setAlertMessage);

      updateDate();
  
       SessionData(email, password);

   
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
