import React, { useEffect, useState } from "react";
import * as S from "./styles";
import firebase from "../../services/firebase";


function Profile() {

    const [data, setData] = useState([])

    useEffect(() => {
        function catchData() {
            const user = localStorage.getItem("user")
            const email = JSON.parse(user)

            firebase.firestore().collection('users').doc(email).get().then((docRef) => {
                const data = docRef.data()
                console.log(data)
                setData(data)

            }).catch((error) => { console.log(error) })


        }
        catchData()
    }, []);

    return (
        <S.Container>
            <S.Icon src="./assets/img/icon-perfil.svg" />
            <p>Profile Informations</p>
              <S.Info>{data.nome}</S.Info>
              <S.Info>{data.email}</S.Info>
              <S.Info>{data.cpf}</S.Info>
              <S.Info>{data.cep}</S.Info>
              <S.Info>{data.cidade}</S.Info>
              <S.Info>{data.bairro}</S.Info>
              <S.Info>{data.rua}</S.Info>


            <S.ContainerLinkHome>
                <S.LinkHome to="/home">
                    Back To <span>Home</span>
                </S.LinkHome>
            </S.ContainerLinkHome>
        </S.Container>
    );
}

export default Profile