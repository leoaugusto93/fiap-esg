import React from "react";
import styled from "styled-components";
import esgLogo from '../../assets/images/esg-logo-cut.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaHome, FaMortarPestle, FaRunning, FaPagelines, FaRecycle, FaHandshake } from "react-icons/fa";

const Logo = styled.img.attrs({
    src: esgLogo,
    alt: 'Logo da "ESG"',
})`
    width: 3rem;
    height: 100%;

    @media (min-width: 1024px) {
        width: 4rem;
    }
`;

export default function TopMenu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home"><FaHome /> <span>Home</span></Nav.Link>
                        <Nav.Link href="#" disabled><FaMortarPestle /> <span>Alimentação</span></Nav.Link>
                        <Nav.Link href="#" disabled><FaRunning /> <span>Atividade</span></Nav.Link>
                        <Nav.Link href="#" disabled><FaPagelines /> <span>Horta</span></Nav.Link>
                        <Nav.Link href="/recycling"><FaRecycle /> <span>Reciclagem</span></Nav.Link>
                        <Nav.Link href="#" disabled><FaHandshake /> <span>Voluntário</span></Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        <NavDropdown title="Olá, USUÁRIO">
                            <NavDropdown.Item href="/">Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}