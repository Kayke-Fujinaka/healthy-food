import React from "react";

import * as S from "./styles";

function Error() {
  return (
    <>
      <S.ContainerMain>
        <S.Img 
          src="./assets/img/illustration_error.svg" 
          alt="Image of Error 404"
        />
        <p id="paragraphInfo">This is not the web page you are looking for</p>

        <p>The link may not be working or the Page may have been removed. Check that the link you are trying to open is correct.</p>

        <S.DivBackToHome>
          <S.LinkToHome to="/">
            Back to <span>Login</span>
          </S.LinkToHome>
        </S.DivBackToHome>
      </S.ContainerMain>
      
    </>
  );
}
export default Error
