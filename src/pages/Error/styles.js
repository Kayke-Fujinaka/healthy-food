import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        text-align: center;
        margin-bottom: 15px;
        font-size: 15px;
        padding: 0 50px;
    }
    #paragraphInfo {
        text-align: center;
        color: #1d164d;
        margin-bottom: 15px;
        font-size: 26px;
        font-weight: 600;
        @media (max-width: 375px){
        font-size: 20px;
        }
    }
`

export const Img = styled.img`
    display: block;
    width: 25%;
    margin: 50px auto 40px auto;
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

export const DivBackToHome = styled.div`
    display: block;
    text-align: center;
    margin: 20px 0 25px;
`;

export const LinkToHome = styled(Link)`
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

