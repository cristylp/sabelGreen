import React from "react"
import "./icons2.css"

import { Card, Col, Row } from 'react-bootstrap'

export default function CardsTwo() {
    return (
        <>
            <div className="box">

              <Card className="card1">
                <Card.Body>
                  <Card.Title>+€2Bn</Card.Title>
                  <Card.Text>Transaccionado en <br />proyectos fotolvoltaicos</Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">
                <Card.Body>
                  <Card.Title>2GW</Card.Title>
                  <Card.Text>Desarrollados hasta <br />Ready to Build</Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">
                <Card.Body>
                  <Card.Title>800MW</Card.Title>
                  <Card.Text>Desarrollo del mayor <br />proyecto fotovoltaico en Europa</Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">

                <Card.Body>
                  <Card.Title>+500MW</Card.Title>
                  <Card.Text>en fase COD (c.€600M de valor de transacción)</Card.Text>
                </Card.Body>
              </Card>

            </div>
        </>
    )
}
