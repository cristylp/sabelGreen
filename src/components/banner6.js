import React from "react"
import "./banner6.css"

import { Row, Col } from 'react-bootstrap'
import hq from './../components/images/hq.jpg'


export default function HeaderSix() {
    return (
        <>
            <div className="white-bg">
                <Row>
                    <Col md={4} className="leftImg">
                        <img src={hq} alt="workers lifting solar panels" /> 
                    </Col>
                    <Col md={8}>
                        <h1 className='banner-text2'>El equipo de Sabel Green cuenta con más de 50 años de experiencia agregada en el desarrollo, M&A, estructuración, construcción y O&M para el sector de energía renovable, con más de 17GW a nivel mundial.</h1>
                    </Col>
                </Row>


            </div>
        </>
    )
}