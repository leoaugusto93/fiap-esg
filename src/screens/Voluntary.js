import TopMenu from '../components/TopMenu/TopMenu';
import { Card, Form, Row, Col, Pagination } from "react-bootstrap";
import CardVoluntary from "../components/CardVoluntary/CardVoluntary";

export default function Voluntary() {
    return (
        <>
            <TopMenu />
            <main className="main">
                <article className="container">
                    <Card>
                        <Card.Body>
                            
                            <h3 className="mb-4">Voluntário</h3>
                            <Row>
                                <Col className="col-lg-3 order-lg-2">
                                    <div className="navbar-expand-lg mb-5">
                                        <div className="collapse navbar-collapse">
                                            <div className="w-100">
                                                <div className="mb-4">
                                                    <h6 className="mb-3 fw-bold">Distância</h6>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <small>1 KM</small>
                                                        <small>100 KM</small>
                                                    </div>
                                                    <Form.Range />
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="mb-3 fw-bold">Ordenar</h6>
                                                    <Form.Select className="form-select form-select-sm">
                                                        <option value="DEFAULT" disabled>Selecione...</option>
                                                        <option value="1">A-to-Z</option>
                                                        <option value="2">Z-to-A</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="mb-3 fw-bold">Categoria</h6>
                                                    <Form>
                                                        {['checkbox'].map((type) => (
                                                            <div key={`inline-${type}`} className="mb-3">
                                                                <Form.Check
                                                                    inline
                                                                    label="ONG"
                                                                    name="ong"
                                                                    type={type}
                                                                    id={`inline-${type}-1`}
                                                                /><br />
                                                                <Form.Check
                                                                    inline
                                                                    label="Albergue"
                                                                    name="albergue"
                                                                    type={type}
                                                                    id={`inline-${type}-2`}
                                                                /><br />
                                                                <Form.Check
                                                                    inline
                                                                    label="Cozinha comunitária"
                                                                    name="cozinha"
                                                                    type={type}
                                                                    id={`inline-${type}-3`}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="col-lg-9">
                                    input data

                                    <Row className="row row-cols-1 row-cols-sm-1 row-cols-md-1 mb-4 g-4">
                                        <CardVoluntary />
                                    </Row>
                                    <Pagination className="d-flex justify-content-md-end">
                                        <Pagination.Prev>Anterior</Pagination.Prev>
                                        <Pagination.Item active>{1}</Pagination.Item>
                                        <Pagination.Item>{2}</Pagination.Item>
                                        <Pagination.Item>{3}</Pagination.Item>
                                        <Pagination.Item>{4}</Pagination.Item>
                                        <Pagination.Next>Próximo</Pagination.Next>
                                    </Pagination>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </article>
            </main>
        </>
    );
}