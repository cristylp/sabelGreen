import React from "react"
import "./infoCards.css"

import { Card, Col } from 'react-bootstrap'
import hands from "./../components/images/hands.png"
import battery from "./../components/images/battery.png"
import construction from "./../components/images/construction.png"
import world from "./../components/images/world.png"


export default function Cards() {
    return (
        <>
            <Col xs={2} md={4}>
                <Card className='info-card' style={{ width: '35rem' }}>
                    <div>
                        <Card.Img variant="top" src={hands} />
                        <Card.Body>
                            <Card.Title>+50 años</Card.Title>
                            <Card.Text>de experiencia agregada</Card.Text>
                        </Card.Body>
                    </div>
                    <div>
                        <Card.Img variant="top" src={battery} />
                        <Card.Body>
                            <Card.Title>+500 MW</Card.Title>
                            <Card.Text>en desarrollo</Card.Text>
                        </Card.Body>
                    </div>
                    <div>
                        <Card.Img variant="top" src={construction} />
                        <Card.Body>
                            <Card.Title>+10 proyectos</Card.Title>
                            <Card.Text>en marcha</Card.Text>
                        </Card.Body>
                    </div>
                    <div>
                        <Card.Img variant="top" src={world} />
                        <Card.Body>
                            <Card.Title>Internacional</Card.Title>
                            <Card.Text>con oficinas en España</Card.Text>
                        </Card.Body>
                    </div>
                </Card>
            </Col>
        </>
    )
}