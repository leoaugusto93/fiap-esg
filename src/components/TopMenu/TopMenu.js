import React from "react";
import styled from "styled-components";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import esgLogo from '../../assets/images/esg-logo.png';

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
                <Navbar.Brand href="#"><Logo /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#" disabled>Alimentação</Nav.Link>
                        <Nav.Link href="#" disabled>Atividade Física</Nav.Link>
                        <Nav.Link href="#" disabled>Horta</Nav.Link>
                        <Nav.Link href="/reciclagem">Reciclagem</Nav.Link>
                        <Nav.Link href="#" disabled>Voluntário</Nav.Link>
                        <Nav.Link href="#" disabled>Horta</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Olá, USUÁRIO" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}