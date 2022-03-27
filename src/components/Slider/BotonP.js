import React, { useState, useEffect } from "react";
import { SubmitButton } from "./Boton";

export const FancyButton = () => {

   const initialState = "Suscribirse";
    const [buttonText, setButtonText] = useState("Suscribirse");
    

    // the effect
    useEffect(() => {
        if (buttonText !== initialState) {

        } 
    }, [buttonText])

    const changeText = (text) => setButtonText(text);

    return (
        <SubmitButton type="submit" onClick={() => changeText("Cancelar Suscripcion")} >{buttonText}</SubmitButton>
       
    )



};



