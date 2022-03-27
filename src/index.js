import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes/routes";
import GlobalStyle from './Styles/globalstyles'
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <>
    <Routes />
    <ToastContainer />
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
