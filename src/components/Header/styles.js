import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 6% 10px;
  position: fixed;
  z-index: 4;
  background-color: #fcfcfc;
  box-shadow: -1px 1px 5px 1px rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 2em;
    color: #badc58;
    @media (max-width: 600px) {
      font-size: 1em;
    }
  }
  div {
    display: flex;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 40px;
    cursor: pointer;
    @media (max-width: 800px) {
      display: none;
    }
  }

  a {
    text-decoration: none;
  }
  li {
    font-weight: 500;
    color: #badc58;
    &:hover {
      text-decoration: underline;
    }
    &:active {
      opacity: 0.2;
    }
  }
  section {
    display: none;
    cursor: pointer;
    @media (max-width: 800px) {
      display: flex;
    }
  }

`;

export const LogoutHeader = styled.button`
  margin: 1px 0 0 35px;
  color: #000;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  &:active {
    opacity: 0.5;
  }
  @media (max-width: 800px) {
    display: none;
  }
`

export const ProfileHeader = styled.button`
  color: #1D164D;
  font-weight: 600;
  font-size: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
` 

export const ContainerHeader = styled.section `
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;

    background: rgb(145,210,98, 0.95);
    background: linear-gradient(0deg, rgba(145,210,98,0.95) 19%, rgba(145,210,98,0.95) 50%);

    opacity: 0;
    pointer-events: none;

    transition: .5s;
    transform: translateY(58px);

   

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        transform: rotate(45deg);
        transition: .7s;
        cursor: pointer;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        list-style: none;
        transform: scale(0.7);
        transition: .7s;
    }

    a {
      text-decoration: none;
    }
    li {
      font-weight: 500;
      color: #fff;
      &:hover {
        opacity:0.8;
      }
      &:active {
        opacity: 0.2;
      }
    }
    

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);

        >svg {
            transform: rotate(0deg);
        }

        nav {
            transform: scale(1);
        }
    `}
    @media (max-width: 800px) {
            display: flex;
        }
`;


export const Logout = styled.button`
    color: rgb(145,210,98, 0.95);
    font-weight: 600;
    display: flex;
    text-decoration: none;
    background: #fff;
    align-items:center;
    padding: 8px;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    span{
      margin-left: 10px
    }
`;


export const Profile = styled.button`
  color: rgb(145,210,98, 0.95);
  font-weight: 600;
  display: flex;
  text-decoration: none;
  background: #fff;
  align-items:center;
  padding: 8px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  span{
    margin-left: 5px
  }


` 