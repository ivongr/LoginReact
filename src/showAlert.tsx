import { useEffect } from 'react';

interface AlertProps {
  message: string;
  setShowAlert: (value: boolean) => void;
}

function ShowAlert({ message, setShowAlert }: AlertProps) {
  useEffect(() => {
    const time = setTimeout(() => {
      setShowAlert(false); // Oculta la alerta
    }, 5000);

    return () => clearTimeout(time);
  }, [setShowAlert]);

  return (
    <div className='alert' role='alert'>
      {message}
    </div>
  );
}

export default ShowAlert;
