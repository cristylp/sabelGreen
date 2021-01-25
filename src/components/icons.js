import React from "react"
import "./icons.css"

import { Card, Col, Row } from 'react-bootstrap'
import hands from "./../components/images/hands.png"
import battery from "./../components/images/battery.png"
import construction from "./../components/images/construction.png"
import world from "./../components/images/world.png"


export default function Cards() {
    return (
        <>
            <div>
                <Row className='background'>
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