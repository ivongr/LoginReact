import React from 'react';

const ShowAlert = ({ message, setShowAlert }) => {
  
 
    const time = setTimeout(() => {
      setShowAlert(false); // Oculta la alerta
    }, 5000);

  return (
    <div className="alert" role="alert">
      {message}
    </div>
  );
};

export default ShowAlert;
