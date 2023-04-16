import React from "react";
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";
import styled from "styled-components";

const InformationGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 70px;
`;

const CardIcon = styled.div`
    width: 100%;
    height: 70px;
    background-image: url('${props => props.src}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export default function CardESG({title, description, icon}) {
    return <Col>
        <Card>
            <Card.Body>
                <InformationGrid>
                    <div>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </div>
                    <CardIcon src={icon} />
                </InformationGrid>
            </Card.Body>
        </Card>
    </Col>
}