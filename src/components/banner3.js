import React from "react"
import "./banner3.css"

import { Container, Row, Col } from 'react-bootstrap'


export default function HeaderTree() {
    return (
        <>
            <div className="bg-pic3">
                <Container>
                    <h1 className='banner-text3'>Desarrollo de proyectos</h1>
                    <Row>
                        <Col className='mainText'>Ánalisis especial</Col>
                        <Col className="secundaryText" md={9}><b>Análisis del mercado</b>, de la inversión, de los entornos fiscales y de las oportunidades. <br /> <b>Identificación, análisis de prefactibilidad</b> de las localizaciones óptimas y cercanos a las SETs de cada proyecto. <br /> <b>Negociación y acuerdo de terrenos.</b> <br /> <b>Diseño de calendario</b> de proyecto. </Col>
                    </Row>
                    <Row>
                        <Col className='mainText'>Programación del <br /> Desarrollo</Col>
                        <Col className="secundaryText" md={9}><b>Constitución de las sociedades</b> específicas de proyecto (SPV) y diseño de la estructura de cada transacción. <br /> <b>Identificaciónde los permisos necesarios</b> dependiendo del país donde se realice. <br /> <b>Diseño de los planes de desarrollo y construcción,</b> definición de presupuestos y definición de calendarios detallados de costes.</Col>
                    </Row>
                </Container>
            </div>
            
        </>
    )
}