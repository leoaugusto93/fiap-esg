import styled from "styled-components";
import { FaHandshake } from "react-icons/fa";
import image01 from "../../assets/images/001.png";
import image02 from "../../assets/images/002.png";
import image03 from "../../assets/images/003.png";
import image04 from "../../assets/images/004.png";
import { Col, Card, Button } from "react-bootstrap";

const VoluntaryImage01 = styled.img.attrs({
    src: image01,
    alt: 'Donate image 01',
})`
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
`;
const VoluntaryImage02 = styled.img.attrs({
    src: image02,
    alt: 'Voluntary image 02',
})`
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
`;
const VoluntaryImage03 = styled.img.attrs({
    src: image03,
    alt: 'Voluntary image 03',
})`
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
`;
const VoluntaryImage04 = styled.img.attrs({
    src: image04,
    alt: 'Voluntary image 04',
})`
    min-width: 5rem;
    height: 6rem;
    border-radius: 1rem;
`;

export default function CardVoluntary() {
    return (
        <>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className="d-flex align-items-center">
                            <VoluntaryImage01 />
                            <div className="ms-4">
                                <h6 className="fw-bold">Food 4 All</h6>
                                <FaHandshake className="text-primary fs-1" />
                            </div>
                        </Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Card.Text>
                        <Button href="">Ver site</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className="d-flex align-items-center">
                            <VoluntaryImage02 />
                            <div className="ms-4">
                                <h6 className="fw-bold">Casas André Luiz</h6>
                            </div>
                        </Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Card.Text>
                        <Button variant="link" disabled>Ver perfil</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className="d-flex align-items-center">
                            <VoluntaryImage03 />
                            <div className="ms-4">
                                <h6 className="fw-bold">Amigos do Bem</h6>
                            </div>
                        </Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Card.Text>
                        <Button variant="link" disabled>Ver perfil</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className="d-flex align-items-center">
                            <VoluntaryImage04 />
                            <div className="ms-4">
                                <h6 className="fw-bold">Banco de Alimentos</h6>
                            </div>
                        </Card.Title>
                        <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Card.Text>
                        <Button variant="link" disabled>Ver perfil</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}