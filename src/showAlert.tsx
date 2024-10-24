import { useEffect, useState } from "react";

/*interface MyAlertProps {
  message: string,
  setShowAlert: any
}*/

const  ShowAlert = () => {
  
  const [message, setMessage ] = useState ("")
  const [alert, setShowAlert] = useState(true)
  useEffect(() => {
   const time =  setTimeout(() => {
      setShowAlert(false); // Oculta la alerta
    }, 5000);
  
    return () => clearTimeout(time);
  },[]);

  return (
    <div className="alert" role="alert">
      {message}
    </div>
  );
};

export default ShowAlert;
