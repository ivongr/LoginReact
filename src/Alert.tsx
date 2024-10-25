import { useEffect } from 'react';

interface AlertProps {
  message: string;
  setAlert: (value: boolean) => void;
}

function Alert({ message, setAlert }: AlertProps) {
  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false); // Oculta la alerta
    }, 5000);

    return () => clearTimeout(time);
  }, [setAlert]);

  return (
    <div className='alert' role='alert'>
      {message}
    </div>
  );
}

export default Alert;
