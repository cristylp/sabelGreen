import React from "react"
import "./icons2.css"

import { Card, Col, Row } from 'react-bootstrap'

export default function Map() {
    return (
        <>
        <div>
          <p>La radiación solar incidente en tiempo real, en todo el mundo</p>
          <iframe width="640" height="290" src="https://solcast.com/embed.html?v=global/2021-01-09/1280x520" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
        </div>
        </>
        )
  }
