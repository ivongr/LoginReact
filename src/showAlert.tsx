import React, { useEffect } from 'react';

const ShowAlert = ({ message, setShowAlert }) => {
  
  // Ocultar la alerta automáticamente después de 5 segundos
  useEffect(() => {
    const time = setTimeout(() => {
      setShowAlert(false); // Oculta la alerta
    }, 5000);

    return () => clearTimeout(time); // Limpiar el temporizador al desmontar el componente
  }, [setShowAlert]);

  return (
    <div className="alert" role="alert">
      {message}
    </div>
  );
};

export default ShowAlert;
