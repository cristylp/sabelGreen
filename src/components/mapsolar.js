import React from "react"
import "./mapsolar.css"

import { Card, Col, Row } from 'react-bootstrap'

export default function MapSolar() {
    return (
        <>
        <div className="container">
          <div className="second">
            <p>La radiación solar incidente en tiempo real, en todo el mundo</p>
            <iframe  src="https://solcast.com/embed.html?v=global/2021-01-09/1280x520" frameborder="0" allow="autoplay;" allowfullscreen className="mapsolar">
            </iframe>
          </div>

        </div>
        </>
        )
  }
