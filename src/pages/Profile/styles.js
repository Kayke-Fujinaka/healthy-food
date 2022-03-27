import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Icon = styled.img`
    display:block;
    width: 10%;
    margin: 50px auto 30px auto;
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

export const H1 = styled.h1`
    text-align: center;
    color: #1d164d;
    margin-bottom: 15px;
    font-size: 26px;
    @media (max-width: 375px){
        font-size: 20px;
    }
`;

export const Info = styled.label`
    display:block;
    width: 320px;
    height: 45px;
    border-radius: 10px;
    box-shadow: -4px 4px 18px rgba(0, 0, 0, 0.09);
    color: #969696;
    margin: 10px auto 12px;
    padding: 15px 15px;
    @media (max-width: 375px){
        width: 250px;
        height: 35px;
        font-size: 11px;
    }
`;


export const ContainerLinkHome = styled.div`
    display: block;
    text-align: center;
    margin: 20px 0 50px;
`;

export const LinkHome = styled(Link)`
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


