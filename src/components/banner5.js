import React from "react"
import "./banner5.css"

import { Container, Row, Col, Card } from 'react-bootstrap'
import cloud from './../components/images/cloud.png'
import graph from './../components/images/graph2.png'
import bulb from './../components/images/plant2.png'
import plant from './../components/images/plant.png'


export default function HeaderFive() {
    return (
        <>
            <div className='bg-color'>
                <Container>
                    <h1 className='banner-text4'>Optimización energética y autoconsumo</h1>
                </Container>
                    <Row>
                        <Col md={{ span: 4, offset: 1 }}>
                            <Card className='info-card3' style={{ width: '80rem' }}>
                                <div>
                                    <Card.Img variant="top" src={cloud} alt='industrial chimney img' />
                                    <Card.Body>
                                    <Card.Text className='card-text3 down'>Desarrollo de proyectos de <br /> autoconsumo para puertos <br /> marítimos, parques logísticos, <br /> industrias con alta demanda <br /> energética, minado de <br /> criptomonedas y promociones <br /> inmobiliarias (residenciales, <br /> oficinas, y centros comerciales). </Card.Text>
                                    </Card.Body>
                                </div>
                                <div>
                                <Card.Img variant="top" src={graph} alt='piggy bank img' />
                                    <Card.Body>
                                    <Card.Text className='card-text3'>Reducción de c.80% del coste <br /> energético con amortización de <br /> inversión en 5 años.</Card.Text>
                                    </Card.Body>
                                </div>
                                <div>
                                <Card.Img variant="top" src={bulb} alt='recycle triangle' />
                                    <Card.Body>
                                    <Card.Text className='card-text3'>Optimización de procesos <br /> energéticos e industriales <br /> mediante el desarrollo y la <br /> ingeniería de proyectos de <br />autoconsumo.</Card.Text>
                                    </Card.Body>
                                </div>
                                <div>
                                    <Card.Img variant="top" src={plant} alt='wave graph' />
                                    <Card.Body>
                                        <Card.Text className='card-text3 down'>Generación distribuida, reducción <br /> de costes operativos y aumento <br /> de rentabilidad de inversiones y <br /> proyectos.</Card.Text>
                                    </Card.Body>
                                </div>
                            </Card>
                        </Col>
                    </Row>
            </div>
        </>
    )
}