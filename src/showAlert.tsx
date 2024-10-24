import { useEffect } from "react";

interface MyAlertProps {
  message: string,
  setShowAlert: any
}

function ShowAlert ({ message, setShowAlert }: MyAlertProps)  {
  
 
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
