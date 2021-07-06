import React from "react"
import "./mapsolar.css"

import { Card, Col, Row } from 'react-bootstrap'

export default function MapSolarEn() {
    return (
        <>
        <div className="mapsolar">
            <h3 className="maptitle">Incident solar radiation in real time, worldwide</h3>
            <iframe width="100%" height="100%" src="https://solcast.com/embed.html?v=global/2021-06-27/1280x520" frameborder="0" allow="autoplay;" allowfullscreen class="map"></iframe>
        </div>
        </>
        )
  }
