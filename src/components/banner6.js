import React from "react"
import "./banner6.css"

import { Row, Col } from 'react-bootstrap'
import solar from './../components/images/solar-power2.jpg'
import ceiling2 from './../components/images/ceiling2.jpg'


export default function HeaderSix() {
    return (
        <>
            <div className="white-bg" id="equipo">
                <div className="boxsix">
                    <div className="left">
                      <div md={4} className="leftImg">
                          <img src={solar} alt="workers lifting solar panels" />
                      </div>
                    </div>
                    <div className="right">
                      <div className='banner-text6' md={8}>
                          <h1>El equipo de Sabel Green cuenta con más de 50 años de experiencia agregada en el desarrollo, M&A, estructuración, construcción y O&M para el sector de energía renovable, con más de 17GW a nivel mundial.</h1>
                          <img className="rightImg" src={ceiling2} alt="workers lifting solar panels" />
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}
