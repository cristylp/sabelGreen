import React from "react"
import "./banner6.css"

import { Row, Col } from 'react-bootstrap'
import solarpanel from './../components/images/picizq_SabelGreen.jpg'



export default function HeaderSixEn() {
    return (
        <>
            <div className="white-bg" id="equipoEn">
                <div className="pic" style={{opacity: '60%'}}>
                </div>
                <div className="text">
                  <h1>
                    The Sabel Green team has more than 50 years of aggregate experience in development, M&A, structuring, construction and O&M for the renewable energy sector, with more than 17GW worldwide.
                  </h1>
                </div>
            </div>
        </>
    )
}
