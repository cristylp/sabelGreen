import React from "react"
import "./banner2.css"

import { Container, Row, Col, Card } from 'react-bootstrap'
import solarPanels from './../components/images/b&w.jpg'


export default function HeaderTwo() {
    return (
        <>
            <div className="bg-pic2" style={{ backgroundImage: `url(${solarPanels})`, backgroundSize: "cover", height:'800px' }} fluid>
                <Container>
                    <h1 className='banner-text2'>Sabel Green desarrolla, gestiona e invierte en activos de energías renovables en Europa Latinoamérica y África desde la originación hasta la fase operativa. Esta estrategia permite minimizar los riesgos asociados al terreno, el desarrollo y la comercialización de los activos, maximizando el valor y la rentabilidad para los inversores. Nuestro modelo de negocio se basa en:</h1>
                </Container>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <Card className='info-card' style={{ width: '70rem' }}>
                            <div>
                                <Card.Img variant="top" src={hands} alt='handshake' />
                                <Card.Body>
                                    <Card.Title>+50 años</Card.Title>
                                    <Card.Text>de experiencia <br /> agregada</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Img variant="top" src={battery} alt='battery img' />
                                <Card.Body>
                                    <Card.Title>+500 MW</Card.Title>
                                    <Card.Text>en desarrollo</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Img variant="top" src={construction} alt='construction tower' />
                                <Card.Body>
                                    <Card.Title>+10 proyectos</Card.Title>
                                    <Card.Text>en marcha</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Img variant="top" src={world} alt='world img' />
                                <Card.Body>
                                    <Card.Title>Internacional</Card.Title>
                                    <Card.Text>con oficinas en <br /> España y México</Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}