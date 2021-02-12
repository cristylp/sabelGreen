import React from "react"
import "./banner6.css"

import { Row, Col } from 'react-bootstrap'
import solarpanel from './../components/images/picizq_SabelGreen.jpg'


export default function HeaderSix() {
    return (
        <>
            <div className="white-bg" id="equipo">
                <div className="pic" style={{opacity: '60%'}}>
                </div>
                <div className="text">
                  <h1>El equipo de Sabel Green cuenta con más de 50 años de experiencia agregada en el desarrollo, M&A, estructuración, construcción y O&M para el sector de energía renovable, con más de 17GW a nivel mundial.</h1>
                </div>
            </div>
        </>
    )
}
