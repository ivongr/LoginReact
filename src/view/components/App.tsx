import { useState, FormEvent } from "react";
import Alert from "./alert";
import { initLogin } from "../../login/domain/init-login";
import LoginForm from '../../login/view/components/login-form';
import { useLoginStore } from "../../login/domain/store-login";
import { useAuthStore } from "../../login/domain/expires-date";
import { useSessionStore } from "../../login/domain/data-session";

const App = () => {
   const { email, setEmail, password, setPassword } = useLoginStore();

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
   const updateDate = useAuthStore((state) => state.updateDate);
   const SessionData = useSessionStore((state) => state.SessionData);



  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await initLogin(email, password, setShowAlert, setAlertMessage);
    SessionData(email,password)
    updateDate();
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
        <Alert message={alertMessage} setShowAlert={setShowAlert} />
      )}
    </>
  );
};

export default App;
