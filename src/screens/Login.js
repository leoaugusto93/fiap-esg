import styled from "styled-components";
import { FaEyeSlash } from "react-icons/fa";
import esgLogo from '../assets/images/esg-logo.png';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const ContainerLogin = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardLogin = styled.div`
    width: 100%;
    max-width: 24rem;
    padding: 1.8rem;
    background-color: #FFFFFF;
    border-radius: .375rem;
    box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);

    @media only screen and (max-width: 768px) {
        width: 100vw;
        border-radius: 0;
    }
`;

const Logo = styled.img.attrs({
    src: esgLogo,
    alt: 'Logo da "ESG"',
})`
    width: 6rem;
    height: 100%;
`;

export default function Login() {
    return (
        <ContainerLogin>
            <CardLogin>
                <div className="d-flex justify-content-center">
                    <Logo className="mb-4" />
                </div>
                <FloatingLabel label="Email" className="mb-4">
                    <Form.Control type="email" defaultValue={"user@mail.com"} />
                </FloatingLabel>
                <FloatingLabel label="Senha" className="input-password mb-4">
                    <Form.Control type="password" defaultValue={"123"} />
                    <FaEyeSlash className="eye-icon" />
                </FloatingLabel>
                <div className="d-grid gap-2">
                    <Button href="/home" className="btn-800" size="lg">ENTRAR</Button>
                </div>
            </CardLogin>
        </ContainerLogin>
    );
}