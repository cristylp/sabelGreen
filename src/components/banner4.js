import React from "react"
import "./banner4.css"

import { Container, Row, Col, Card } from 'react-bootstrap'
import cloud from './../components/images/cloud.png'
import graph from './../components/images/graph2.png'
import bulb from './../components/images/plant2.png'
import plant from './../components/images/plant.png'


export default function HeaderFour() {
    return (
        <>
            <Container>
                <h1 className='banner-text4'>Gestión de Activos</h1>
            </Container>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>
                        <Card className='info-card3' style={{ width: '80rem' }}>
                            <div>
                                <Card.Img variant="top" src={cloud} alt='technologic cloud img' />
                                <Card.Body>
                                    <Card.Text className='card-text3 down'>Sabel Green está desarrollando <br /> cientos de MW de capacidad a <br /> nivel mundial, apalancándose en <br /> la implementación de <br /> tecnologpias innovadoras, basadas <br /> en el uso de recursos naturales. </Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                            <Card.Img variant="top" src={graph} alt='graphic img' />
                                <Card.Body>
                                <Card.Text className='card-text3'>Sabel Green contribuye al <br /> desarrollo sostenible del planeta <br /> a través de la producción de <br /> energía renovable, aprovechando <br /> recursos naturales seguros, <br /> limpios e inagotables.</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                            <Card.Img variant="top" src={bulb} alt='bulb with plant img' />
                                <Card.Body>
                                <Card.Text className='card-text3'>Sabel Green contribuye al <br /> desarrollo sostenible del planeta <br /> a través de la producción de <br /> energía renovable, aprovechando <br />recursos naturales seguros, <br /> limpios e inagotables.</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Img variant="top" src={plant} alt='small plant img' />
                                <Card.Body>
                                    <Card.Text className='card-text3 down'>Nuestro crecimiento se basa en la <br /> búsqueda de tecnología <br /> innovadora que permita la <br /> producción masiva de energía <br /> limpia y sostenible, lo que <br /> representa uno de los grandes <br /> desafíos de nuestro tiempo.</Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                </Row>
        </>
    )
}