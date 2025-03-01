import React, { useState } from "react";
import styled from "@emotion/styled";
import { LoginForm } from "./LoginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./SignupForm";
import { RecoverPasswordForm } from "./RecoverPasswordForm";

const BoxContainer = styled.div`
  width: 300px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin: 50px 0px;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(10, 109, 182);
  background: linear-gradient(
    58deg,
    rgba(10, 109, 182, 1) 24%,
    rgba(13, 170, 165, 1) 95%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

//Funcion es para la animacion del formulario
export function AccountBox(props) {
  const { initialState } = props;
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState(initialState ?? "iniciar_sesion");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("registrarse");
      // window.history.pushState({}, null, "/Registrate" );
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("iniciar_sesion");
      //window.history.pushState({}, null, "/IniciaSesion" );
    }, 400);
  };

  // const switchRecoverPassword = () => {
  //   playExpandingAnimation();
  //   setTimeout(() => {
  //     setActive("recuperar_contra");
  //   }, 400);
  // };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    // switchRecoverPassword,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "iniciar_sesion" && (
            <HeaderContainer>
              <HeaderText>¡Bienvenido!</HeaderText>
              <SmallText>Iniciar Sesión</SmallText>
            </HeaderContainer>
          )}
          {active === "registrarse" && (
            <HeaderContainer>
              <HeaderText>Crear</HeaderText>
              <HeaderText>Cuenta</HeaderText>
              <SmallText>Por favor, regístrese para continuar.</SmallText>
            </HeaderContainer>
          )}
          {active === "recuperar_contra" && (
            <HeaderContainer>
              <HeaderText>Recuperar</HeaderText>
              <HeaderText>Contraseña</HeaderText>
              <SmallText>Por favor, ingrese su correo.</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "iniciar_sesion" && (
            <LoginForm switchToSignup={switchToSignup} />
          )}
          {active === "registrarse" && (
            <SignupForm switchToSignin={switchToSignin} />
          )}
          {active === "recuperar_contra" && <RecoverPasswordForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}

export default AccountBox;
