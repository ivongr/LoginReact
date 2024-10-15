import { useState  } from "react";
import React from 'react'
const showAlert = ({ message, setShowAlert}) => {

    setTimeout(() => {
        const alertElement = document.querySelector(".alert");
        if (alertElement) {
            alertElement.remove();
        }
    }, 5000);


    return (
        <>
        <div className="alert" role="alert">
          {message}
        </div>
        </>
    );
}

export default showAlert;