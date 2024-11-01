import { useEffect } from 'react';

interface alertProps {
  message: string;
  setShowAlert: (value: boolean) => void;
}

function alert({ message, setShowAlert }: alertProps) {
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

export default alert;
