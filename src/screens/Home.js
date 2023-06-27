import Row from 'react-bootstrap/Row';
import TopMenu from '../components/TopMenu/TopMenu';
import CardESG from "../components/CardESG/CardESG";
import { FaGift, FaChartLine, FaRegCalendarAlt } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <TopMenu />
            <main className="main">
                <article className="container">
                    <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        <CardESG
                            color="#09BF8C"
                            title="Prêmios"
                            description="Confira a lista de prêmios"
                            icon={<FaGift />}
                            link=""
                        />
                        <CardESG
                            color="#FFB64B"
                            title="Ranking geral"
                            description="Confira o raking geral"
                            icon={<FaChartLine />}
                            link=""
                        />
                        <CardESG
                            color="#727CF5"
                            title="Ranking mensal"
                            description="Confira o ranking mensal"
                            icon={<FaRegCalendarAlt />}
                            link=""
                        />
                    </Row>
                </article>
            </main>
        </>
    );
}