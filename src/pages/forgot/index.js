import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Form,
  Logo,
  H1,
  Span,
  DivButtons,
  ButtonSend,
  DivForgot,
  Register,
} from "./styles";
import Swal from "sweetalert2";
import firebase from "../../services/firebase";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
  })
  .required();

function Forgot() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  async function onSubmit(userData) {
    
    const { email } = userData
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        toast.success("Verifique seu email!", {
          autoClose: 1000,
          pauseOnHover: false,
        })
        history.push("/");
        return;
      })
          .catch(function (error) {
            toast.error("Ocorreu algum problema. Tente Novamente!", {
              autoClose: 1000,
              pauseOnHover: false,
            });
          })
  } 
        
  return (
          <>
            <Form onSubmit={handleSubmit(onSubmit)}>

              <Logo src="./assets/img/illustration_forgot.svg"></Logo>
              <H1> Forgot Password </H1>

              <label>
                <input className={`input ${errors.email ? "error" : ""}`}
                  type="email"
                  placeholder="Email Adress" {...register("email", { required: true })}
                />{" "}
                {errors.email && <Span> {errors.email?.message}</Span>}
              </label>

              <DivForgot >
                <Register to="/">Back to<span> Login</span> </Register>
              </DivForgot>

              <DivButtons>
                <ButtonSend type="submit">Recover Password</ButtonSend>
              </DivButtons>

            </Form>
          </>
        );
      }

export default Forgot;