import styled from "styled-components";
import image01 from "../../assets/images/001.png";
import { Col, ListGroup, Button } from "react-bootstrap";

const VoluntaryImage01 = styled.img.attrs({
    src: image01,
    alt: 'Donate image 01',
})`
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
`;
const CardScore = styled.div`
    padding: .8rem;
    text-align: center;
    background-color: #EEEEEE;
    border-radius: .5rem;
`;
const CardInfo = styled.div`
    display: flex;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export default function CardVoluntary() {
    return (
        <>
            <Col>
                <ListGroup variant="flush">
                    <ListGroup.Item className="mb-4 pb-4">
                        <CardInfo>
                            <VoluntaryImage01 />
                            <div className="px-4">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="fw-bold mb-1">Food 4 All</h5>
                                    <small>27/06/2023</small>
                                </div>
                                <p>
                                    Nos ajude neste difícil desafio que é o combate à fome,
                                    cadastre-se e leve alimento à milhares de famílias e pessoas necessitadas.
                                    Cadastre-se como um doador ou voluntário.
                                </p>
                                <Button href="https://fiap-food-4-all.vercel.app">Ver site</Button>
                            </div>
                            <CardScore>
                                <h2>180</h2>
                                <small>pontos</small>
                            </CardScore>
                        </CardInfo>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </>
    );
}