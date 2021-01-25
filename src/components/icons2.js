import React from "react"
import "./icons2.css"

import { Card, Col, Row } from 'react-bootstrap'

export default function CardsTwo() {
    return (
        <>
            <div className='background'>
                <Row>
                    <Col md={{ span: 5, offset: 1 }}>
                        <Card className='icons-card2' style={{ width: '70rem' }}>
                            <div>
                                <Card.Body>
                                    <Card.Title>+€2Bn</Card.Title>
                                    <Card.Text>Transaccionando en <br /> proyectos fotovoltaicos</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Body>
                                    <Card.Title>2GW</Card.Title>
                                    <Card.Text>Desarrollados hasta  <br /> Ready to Build</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Body>
                                    <Card.Title>800MW</Card.Title>
                                    <Card.Text>Desarrollo del mayor  <br /> proyecto fotovoltaico en  <br /> Europa</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Body>
                                    <Card.Title>+500MW</Card.Title>
                                    <Card.Text>en fase COD (c.€600M <br /> de valor de transacción)</Card.Text>
                                </Card.Body>
                            </div>
                            <div>
                                <Card.Body>
                                    <Card.Title>+€350M</Card.Title>
                                    <Card.Text>En activos bajo gestión</Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                 </Row>
            </div>
        </>
    )
}