import React from "react"
import "./banner2.css"

import { Container, Row, Col, Card } from 'react-bootstrap'
import tower from './../components/images/tower.png'
import map from './../components/images/map.png'
import grafica from './../components/images/graph.png'
import lupa from './../components/images/lupa.png'
import hq from './../components/images/hq.jpg'



export default function HeaderTwo() {
    return (
        <>
            <div className="bg-pic2">
                <Container>
                    <h1 className='banner-text2'>Sabel Green desarrolla, gestiona e invierte en activos de energías renovables en Europa Latinoamérica y África desde la originación hasta la fase operativa. Esta estrategia permite minimizar los riesgos asociados al terreno, el desarrollo y la comercialización de los activos, maximizando el valor y la rentabilidad para los inversores. Nuestro modelo de negocio se basa en:</h1>
                </Container>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <Card className='info-card2' style={{ width: '80rem' }}>
                            <div>
                                <Card.Img variant="top" src={tower} alt='cellphone tower' />
                                <Card.Body>
                                    <Card.Text className='card-text2 down'>Ánalisis e identificación <br /> de Sets no evidentes, <br /> considerando las <br /> distintas oportunidades <br /> disponibles en cada <br /> locaclización </Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Img variant="top" src={map} alt='map img' />
                                <Card.Body>
                                    <Card.Text className='card-text2'>Identificación y acuerdo <br /> de terrenos previo al <br /> desarrollo de los <br /> proyectos</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Img variant="top" src={grafica} alt='graphic img' />
                                <Card.Body>
                                    <Card.Text className='card-text2 down'>Optimización de la <br /> asignación de capital en <br /> cada fase de la inversión <br /> del activo</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Img variant="top" src={lupa} alt='magnifying glass img' />
                                <Card.Body>
                                    <Card.Text className='card-text2'>Supervisión y <br /> seguimiento operativo y <br /> comercial de cada activo</Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='solarBuilding'>
                <img src={hq} alt="building with solar panels" />
            </div>
        </>
    )
}