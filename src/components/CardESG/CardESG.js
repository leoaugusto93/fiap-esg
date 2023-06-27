import React from "react";
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";
import styled from "styled-components";

const InformationGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 70px;
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
                    
                </InformationGrid>
            </Card.Body>
        </Card>
    </Col>
}