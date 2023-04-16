import React from "react";
import TopMenu from '../components/TopMenu/TopMenu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardESG from "../components/CardESG/CardESG";
import IconGift from "../assets/images/icon_gift.png";
import IconChart from "../assets/images/icon_chart.png";
import IconCalendar from "../assets/images/icon_calendar.png";

export default function Home() {
    return (
        <>
            <TopMenu />
            <Container className="main">
                <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    <CardESG
                        title="Prêmios"
                        description="Confira a lista de prêmios"
                        icon={IconGift}
                    />
                    <CardESG
                        title="Ranking geral"
                        description="confira o raking geral"
                        icon={IconChart}
                    />
                    <CardESG
                        title="Ranking mensal"
                        description="Confira o ranking mensal"
                        icon={IconCalendar}
                    />
                </Row>
            </Container>
        </>
    );
}