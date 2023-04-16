import React from "react";
import styled from "styled-components";
import esgLogo from '../../assets/images/esg-logo.png';
import { Button } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const CardLogin = styled.div`
    width: 100%;
    max-width: 28rem;
    padding: 1.8rem;
    background-color: #212529;
    box-shadow: 0 0 2rem 0 rgb(41 48 66 / 10%);
    border-radius: .375rem;
`;

const Logo = styled.img.attrs({
    src: esgLogo,
    alt: 'Logo da "ESG"',
})`
    width: 8rem;
    height: 100%;
`;

export default function Login() {
    return (
        <CardLogin>
            <div className="d-md-flex justify-content-md-center">
                <Logo className="mb-4" />
            </div>
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-4">
                <Form.Control type="email" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Senha" className="mb-4">
                <Form.Control type="password" />
            </FloatingLabel>
            <Form.Group controlId="formBasicCheckbox" className="mb-4">
                <Form.Check type="checkbox" label="Lembrar senha" className="text-white" />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button href="/home" variant="primary" size="lg">ENTRAR</Button>
            </div>
        </CardLogin>
    );
}