import { useState, FormEvent } from "react";
import Alert from "./alert";
import { initLogin } from "../../login/domain/init-login";
import LoginForm from '../../login/view/components/login-form';
import { useLoginStore } from "../../login/domain/store-login";
import { useDateStore } from "../../login/domain/expires-date";

const App = () => {
   const { email, setEmail, password, setPassword } = useLoginStore();



  /*const email = useLoginStore((state) => state.email);
  const setEmail = useLoginStore((state) => state.setEmail);
  const password = useLoginStore((state) => state.password);
  const setPassword = useLoginStore((state) => state.setPassword);*/
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');
   // Usamos el hook de Zustand para actualizar la fecha de expiración
   const updateDateIso = useDateStore((state) => state.updateDateIso);


  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await initLogin(email, password, setShowAlert, setAlertMessage);
    updateDateIso();
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
