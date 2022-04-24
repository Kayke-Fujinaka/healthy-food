import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        text-align: center;
        color: #1d164d;
        margin-bottom: 15px;
        font-size: 26px;
        font-weight: 600;
        @media (max-width: 375px){
            font-size: 20px;
        }
    }

    label {
        .input {
            display:block;
            width: 320px;
            height: 45px;
            border: none;
            border-radius: 10px;
            box-shadow: -4px 4px 18px rgba(0, 0, 0, 0.09);
            color: #969696;
            margin: 10px auto;
            padding: 0 10px;
            outline:none;
            cursor: pointer;
            @media (max-width: 375px){
                width: 250px;
                height: 35px;
                font-size: 11px;
            }
        }

        .error{
            border:1px solid red
        }

        span {
            font-size: 11px;
            margin-left: 10px;
            position: absolute;
            margin-top: -9px;
            color: #FF2100;
            @media (max-width: 375px){
                font-size: 9px;
            }
        }
    }
`

export const Img = styled.img`
    display:block;
    width: 25%;
    margin: 50px auto;
    @media (max-width:1000px){
            width: 35%;
    }
    @media (max-width: 850px){
        width: 45%;
    }
    @media (max-width: 650px){
        width: 55%;
    }
    @media (max-width: 450px){
        width: 60%;
    }
    @media (max-width: 350px){
        width: 62%;
    }
`;

export const DivLogin = styled.div`
    display: block;
    text-align: center;
    margin-top: 15px;
`;

export const LinkToLogin = styled(Link)`
    display:block;
    color:#000000;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 5px;
    font-size: 13px;
    text-decoration:none;
    span {
        color: #8FD162
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

export const ButtonSend = styled.button`
    display:block;
    border: none;
    border-radius: 10px;
    background: #8FD162;
    color: #FFFFFF;
    padding: 15px 55px;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    cursor: pointer;
    &:hover{
        transform: translateY(-2px);
        box-shadow: rgba(0, 0, 0, 0.12) 0 8px 15px;
    }
    &:active{
        opacity: 0.5;
    }
    @media (max-width: 375px){
        padding: 10px 30px;
        font-size: 11px;
    }
`;

export const Login = styled(Link)`
    display:block;
    color:#000000;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 30px;
    font-size: 13px;
    text-decoration:none;
    span {
        color: #8FD162
    }
    @media (max-width: 375px){
        font-size: 10px;
    }
`;