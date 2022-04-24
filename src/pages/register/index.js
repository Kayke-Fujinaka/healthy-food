import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as S from "./styles";

import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import firebase from "../../services/firebase";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 digits")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Password Confirmation is required")
      .oneOf([yup.ref("password")], "Passwords must be the same"),
    cpf: yup
      .string()
      .min(11, "Minimum 11 digits")
      .max(11, "Maximum 11 digits")
      .required("CPF is required"),
  })
  .required();

function Register() {
  const [adress, setAdress] = useState(false);
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function adressGet() {
    if (cep.length <= 0) {
      toast.error("Check your CEP information.", {
        autoClose: 1000,
        pauseOnHover: false,
      });

      return;
    }

    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setStreet(data.logradouro);
      setBairro(data.bairro);
      setCity(data.localidade);
      setAdress(true);
    } catch (error) {
      toast.error("Something went wrong, try again", {
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
  }

  async function onSubmit(userData) {
    const { email, password, name, cpf, date } = userData;
    if (city.length <= 0) {
      toast.error("Search by your CEP", {
        autoClose: 1000,
        pauseOnHover: false,
      });

      return;
    }
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password).then(async (value)=>{
          await firebase.firestore().collection('users').doc(email)
          .set({
            rua: street,
            bairro: bairro,
            cidade: city,
            cep: cep,
            email: email,
            nome: name,
            cpf: cpf,
          })
        })
      Swal.fire({
        icon: "success",
        title: "OK!",
        text: "Your account has been successfully created!",
      });
      history.push("/");
      return;

    } catch(error){
      console.log(error)
        if (error.code === 'auth/email-already-in-use'){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email already exists!",
          });

          return
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong, try again!",
          });

          return
        }
    }
  }

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Img src="./assets/img/illustration_register.svg" />

        <p>Register</p>

        <label>
          <input
            className={`input ${errors.name ? "error" : ""}`}
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />{" "}
          {errors.name && <span>{errors.name?.message}</span>}
        </label>

        <label>
          <input
            className={`input ${errors.email ? "error" : ""}`}
            type="email"
            placeholder="Email Adress"
            {...register("email", { required: true })}
          />{" "}
          {errors.email && <span>{errors.email?.message}</span>}
        </label>

        <label>
          <input
            className={`input ${errors.password ? "error" : ""}`}
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />{" "}
          {errors.password && <span>{errors.password?.message}</span>}
        </label>

        <label>
          <input
            className={`input ${errors.confirmPassword ? "error" : ""}`}
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
          />{" "}
          {errors.confirmPassword && (
            <span>{errors.confirmPassword?.message}</span>
          )}
        </label>

        <label>
          <input
            className={`input ${errors.cpf ? "error" : ""}`}
            type="text"
            placeholder="CPF"
            {...register("cpf", { required: true })}
          />
          {errors.cpf && <span>{errors.cpf?.message}</span>}
        </label>

        <S.DivCep>
          <input
            className={`input ${errors.cep ? "error" : ""}`}
            type="text"
            placeholder="CEP"
            onChange={(e) => setCep(e.target.value)}
            required
          />
          <S.ButtonSearchCep type="button" onClick={adressGet}>
            <i className="bx bx-search"></i>
          </S.ButtonSearchCep>
        </S.DivCep>

        {adress ? (
          <>
            <label>
              <input
                className={"input"}
                disabled
                value={street}
                type="text"
                placeholder="Street"
              />
            </label>

            <label>
              <input
                className={"input"}
                disabled
                value={bairro}
                type="text"
                placeholder="District"
              />
            </label>

            <label>
              <input
                className={"input"}
                disabled
                value={city}
                type="text"
                placeholder="City"
              />
            </label>
          </>
        ) : null}

        <S.DivButtons>
          <S.ButtonBack to="/">Back</S.ButtonBack>
          <S.ButtonSend type="submit">Send</S.ButtonSend>
        </S.DivButtons>

        <S.DivSingIn>
          <S.LinkToLogin to="/">
            Already Have an Account? <span>Sign in</span>
          </S.LinkToLogin>
        </S.DivSingIn>
      </S.Form>
    </>
  );
}

export default Register;
