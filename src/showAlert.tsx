import React from 'react';
import { useEffect } from 'react';

interface AlertProps {
  message: string,
  setShowAlert: (value: boolean) => void;
}

const ShowAlert: React.FC<AlertProps> = ({ message, setShowAlert }) => {

  useEffect(() => {
    const time = setTimeout(() => {
      setShowAlert(false); // Oculta la alerta
    }, 5000);

    return () => clearTimeout(time);
  }, [setShowAlert]);

  return (
    <div className="alert" role="alert">
      {message}
    </div>
  );
};

export default ShowAlert;
