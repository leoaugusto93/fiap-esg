import TopMenu from '../components/TopMenu/TopMenu';
import { Card, Breadcrumb, Form, Row, Pagination } from "react-bootstrap";
import CardVoluntary from "../components/CardVoluntary/CardVoluntary";

export default function Voluntary() {
    return (
        <>
            <TopMenu />
            <main className="main">
                <article className="container">
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-4">
                                <h3 className="mb-4">Voluntário</h3>

                                <Breadcrumb>
                                    <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active>Voluntário</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>

                            <Row>
                                <div className="col-lg-3 col-sm-12 order-lg-2">
                                    <div className="navbar-expand-lg mb-5">
                                        <div className="collapse navbar-collapse">
                                            <div className="w-100">
                                                <div className="mb-4">
                                                    <h6 className="mb-3 fw-bold">Pesquisar</h6>
                                                    <Form.Control type="text" placeholder="Pesquisar..." />
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="mb-3 fw-bold">Ordenar</h6>
                                                    <Form.Select className="form-select">
                                                        <option value="DEFAULT" disabled>Selecione...</option>
                                                        <option value="1">A-to-Z</option>
                                                        <option value="2">Z-to-A</option>
                                                    </Form.Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-sm-12">
                                    <Row className="row row-cols-1 row-cols-sm-1 row-cols-md-1 mb-4 g-4">
                                        <CardVoluntary />
                                    </Row>
                                    <Pagination className="d-flex justify-content-md-end">
                                        <Pagination.Prev>Anterior</Pagination.Prev>
                                        <Pagination.Item active>{1}</Pagination.Item>
                                        <Pagination.Next>Próximo</Pagination.Next>
                                    </Pagination>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </article>
            </main>
        </>
    );
}