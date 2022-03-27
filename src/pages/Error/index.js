import React from "react";

import {
    Container,
    Logo,
    H1,
    DivForgot,
    Register,
  } from "./styles";

function Error() {
  return (
    <>
      <Container>
        <Logo src="./assets/img/illustration_error.svg"></Logo>
        <H1>This is not the web page you are looking for</H1>

        <p>The link may not be working or the Page may have been removed. Check that the link you are trying to open is correct.</p>

        <DivForgot>
          <Register to="/">
            Back to <span>Login</span>
          </Register>
        </DivForgot>

      </Container>
    </>
  );
}
export default Error
