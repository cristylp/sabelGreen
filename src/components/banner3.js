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
                    <Row>
                        <Col className='mainText'>Ingeniería</Col>
                        <Col className="secundaryText" md={9}><b>Análisis del mercado</b>, de la inversión, de los entornos fiscales y de las oportunidades. <br /> <b>Identificación, análisis de prefactibilidad</b> de las localizaciones óptimas y cercanos a las SETs de cada proyecto. <br /> <b>Negociación y acuerdo de terrenos.</b> <br /> <b>Diseño de calendario</b> de proyecto. </Col>
                    </Row>
                    <Row>
                        <Col className='mainText'>PLA</Col>
                        <Col className="secundaryText" md={9}><b>Obtención de Permisos, Licencias y Autorizaciones</b> necesarias para la construcción y puesta comercial (COD) de cada proyecto. <br />Elaboración de informes de seguimiento.<br /> <b>Interlocución</b> con los organismos correspondientes.<br /> Obtención de los Permisos, <b>Licencias y Autorizaciones</b> necesarios como por ejemplo: Conexión, Licencia de Generación, Permisos Municipales y Licencia Ambiental y Social. </Col>
                    </Row>
                </Container>
            </div>
            
        </>
    )
}