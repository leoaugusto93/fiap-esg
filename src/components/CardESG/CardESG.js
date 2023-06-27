import React from "react";
import styled from "styled-components";
import { Col, Card, Button } from "react-bootstrap";

const CardIcon = styled.div`
    height: 70px;
`;

export default function CardESG({color, title, description, icon, link}) {
    return <Col>
        <Card>
            <Card.Body className="d-flex align-items-center justify-content-between">
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </div>
                <CardIcon style={{color: color}}>{icon}</CardIcon>
            </Card.Body>
            <div className="card-footer">
                <Button href={link} className="btn-800">Ver mais</Button>
            </div>
        </Card>
    </Col>
}