import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Container,
  Logo,
  H1,
  Input,
  Directions,
  ForgotPassword,
  DivButtons,
  ButtonSend,
  DivForgot,
  Register,
} from "./styles";

import firebase from "../../services/firebase";

function Join() {

  const history = useHistory();
  const inputEmail = useRef();
  const inputPassword = useRef();

    async function login() {
    const email = inputEmail.current.value;
    const password = inputPassword.current.value;

    try {
      const user = await firebase.auth().signInWithEmailAndPassword( email, password);
      localStorage.setItem("user", JSON.stringify(email))
      history.push("/home");
      return;
    } catch {
      toast.error("Email ou senha inválida!", {
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
  }

  return (
    <>
      <Container>
        <Logo src="./assets/img/illustration_login.svg"></Logo>
        <H1>Join</H1>

        <label>
          <Input
            ref={inputEmail}
            type="email"
            placeholder="Email Adress"
            required
          />
        </label>

        <label>
          <Input
            ref={inputPassword}
            type="password"
            placeholder="Password"
            required
          />{" "}
        </label>

        <Directions>
          <ForgotPassword to="/forgot">Forgot password?</ForgotPassword>
        </Directions>

        <DivButtons>
          <ButtonSend onClick={login}>Login</ButtonSend>
        </DivButtons>
        <DivForgot>
          <Register to="/register">
            New here? <span>Create an Account</span>
          </Register>
        </DivForgot>
      </Container>
    </>
  );
}

export default Join;
