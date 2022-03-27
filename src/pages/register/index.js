import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import firebase from "../../services/firebase";
import {
  Form,
  Logo,
  H1,
  Span,
  ButtonSearch,
  DivButtons,
  ButtonBack,
  ButtonSend,
  DivCep,
  DivForgot,
  Login,
} from "./styles";
import Swal from "sweetalert2";
import axios from "axios";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 dígitos")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .required("A Confirmação de Senha é obrigatória")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    date: yup.string().required("A Data de Nascimento é obrigatória"),
    cpf: yup
      .string()
      .min(11, "Mínimo 11 digitos")
      .max(11, "Máximo 11 digitos")
      .required("O CPF é obrigatório"),
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
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function adressGet() {
    if (cep.length <= 0) {
      toast.error("Verifique as informações do seu cep", {
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
      toast.error("Algo de errado aconteceu, tente novamente", {
        autoClose: 1000,
        pauseOnHover: false,
      });
    }
  }

  async function onSubmit(userData) {
    const { email, password, name, cpf, date } = userData;
    if (city.length <= 0) {
      toast.error("Pesquise pelo seu CEP", {
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
            data: date,
          })
        })
      Swal.fire({
        icon: "success",
        title: "OK!",
        text: "Sua conta foi criada com sucesso!",
      });
      history.push("/");
      return;

    } catch(error){
      console.log(error)
        if (error.code === 'auth/email-already-in-use'){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email já existe!",
          });

          return
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo deu errado tente novamente!",
          });

          return
        }
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Logo src="./assets/img/illustration_register.svg"></Logo>

        <H1>Register</H1>

        <label>
          <input
            className={`input ${errors.name ? "error" : ""}`}
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />{" "}
          {errors.name && <Span>{errors.name?.message}</Span>}
        </label>

        <label>
          <input
            className={`input ${errors.email ? "error" : ""}`}
            type="email"
            placeholder="Email Adress"
            {...register("email", { required: true })}
          />{" "}
          {errors.email && <Span>{errors.email?.message}</Span>}
        </label>

        <label>
          <input
            className={`input ${errors.password ? "error" : ""}`}
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />{" "}
          {errors.password && <Span>{errors.password?.message}</Span>}
        </label>

        <label>
          <input
            className={`input ${errors.confirmPassword ? "error" : ""}`}
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
          />{" "}
          {errors.confirmPassword && (
            <Span>{errors.confirmPassword?.message}</Span>
          )}
        </label>

        <label>
          <input
            className={`input ${errors.date ? "error" : ""}`}
            type="date"
            placeholder="Date"
            {...register("date", { required: true })}
          />{" "}
          {errors.date && <Span>{errors.date?.message}</Span>}
        </label>

        <label>
          <input
            className={`input ${errors.cpf ? "error" : ""}`}
            type="text"
            placeholder="CPF"
            {...register("cpf", { required: true })}
          />
          {errors.cpf && <Span>{errors.cpf?.message}</Span>}
        </label>

        <DivCep>
          <input
            className={`input ${errors.cep ? "error" : ""}`}
            type="text"
            placeholder="CEP"
            onChange={(e) => setCep(e.target.value)}
            required
          />
          <ButtonSearch type="button" onClick={adressGet}>
            <i className="bx bx-search"></i>
          </ButtonSearch>
        </DivCep>

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

        <DivButtons>
          <ButtonBack to="/">Back</ButtonBack>
          <ButtonSend type="submit">Send</ButtonSend>
        </DivButtons>

        <DivForgot>
          <Login to="/">
            Already Have an Account? <span>Sign in</span>
          </Login>
        </DivForgot>
      </Form>
    </>
  );
}

export default Register;
