import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    .input {
      display: block;
      width: 320px;
      height: 45px;
      border: none;
      border-radius: 10px;
      box-shadow: -4px 4px 18px rgba(0, 0, 0, 0.09);
      color: #969696;
      margin: 10px auto 12px;
      padding: 0 15px;
      outline: none;
      cursor: pointer;
      @media (max-width: 375px) {
        width: 250px;
        height: 35px;
        font-size: 11px;
      }
    }

    .error {
      border: 1px solid #FF2100;
    }
  }
`;

export const DivCep = styled.div`
  display: flex;
  padding: 10px;

  .input {
      width: 290px;
      height: 45px;
      border: none;
      border-radius: 10px 0 0 10px;
      box-shadow: -4px 4px 18px rgba(0, 0, 0, 0.09);
      color: #969696;
      padding: 15px;
      outline: none;
      @media (max-width: 375px) {
        width: 220px;
        height: 35px;
        font-size: 11px;
      }
  }

  .error {
    border: 1px solid #FF2100;
  }
`;

export const ButtonSearch = styled.button`
  border: none;
  cursor: pointer;
  padding: 10px 8px;
  border-radius: 0 10px 10px 0;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.09);
  background-color: #8fd162;
  transition: 0.4s;
  i {
    font-size: 15px;
    color: black;
  }
  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    opacity: 0.5;
  }
`;

export const Logo = styled.img`
  display: block;
  width: 13%;
  margin: 20px auto 20px auto;
  @media (max-width: 1000px) {
    width: 30%;
  }
  @media (max-width: 650px) {
    width: 40%;
  }
  @media (max-width: 450px) {
    width: 50%;
  }
  @media (max-width: 350px) {
    width: 55%;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  color: #1d164d;
  margin-bottom: 15px;
  font-size: 26px;
  @media (max-width: 375px) {
    font-size: 20px;
  }
`;

export const Span = styled.span`
  color: #FF2100;
  font-size: 11px;
  margin-left: 10px;
  position: absolute;
  margin-top: -9px;
  @media (max-width: 375px) {
    font-size: 9px;
  }
`;

export const SpanCep = styled.span`
  color: #FF2100;
  font-size: 11px;
  margin-left: 10px;
  position: absolute;
  z-index: 1;
  margin-top: 48px;
  @media (max-width: 375px) {
    font-size: 9px;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const ButtonBack = styled(Link)`
  display: block;
  border: 1px solid #8fd162;
  border-radius: 10px;
  background: #fff;
  color: #8fd162;
  text-decoration: none;
  padding: 12.5px 55px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    background: #8fd162;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.12) 0 8px 15px;
  }
  &:active {
    opacity: 0.5;
  }
  @media (max-width: 375px) {
    padding: 10px 30px;
    font-size: 11px;
  }
`;

export const ButtonSend = styled.button`
  display: block;
  border: none;
  border-radius: 10px;
  background: #8fd162;
  color: #ffffff;
  padding: 15px 55px;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.12) 0 8px 15px;
  }
  &:active {
    opacity: 0.5;
  }
  @media (max-width: 375px) {
    padding: 10px 30px;
    font-size: 11px;
  }
`;

export const DivForgot = styled.div`
  display: block;
  text-align: center;
  margin-top: 20px;
`;

export const Login = styled(Link)`
  display: block;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 30px;
  font-size: 13px;
  text-decoration: none;
  span {
    color: #8fd162;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;
