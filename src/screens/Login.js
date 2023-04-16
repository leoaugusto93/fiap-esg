import React from "react";
import styled from "styled-components";
import CardLogin from '../components/Login/Login';

const ContainerLogin = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1.8rem;
`;

export default function Login() {
    return (
        <ContainerLogin>
            <CardLogin />
        </ContainerLogin>
    );
}