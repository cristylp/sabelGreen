import React from "react"
import "./icons2.css"

import { Card, Col, Row } from 'react-bootstrap'

export default function CardsTwoEn() {
    return (
        <>
            <div className="box">

              <Card className="card1">
                <Card.Body>
                  <Card.Title>
                    +€2Bn
                  </Card.Title>
                  <Card.Text>
                    Transacted in <br /> photovoltaic projects
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">
                <Card.Body>
                  <Card.Title>
                    2GW
                  </Card.Title>
                  <Card.Text>
                    Developed to <br /> Ready to Build
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">
                <Card.Body>
                  <Card.Title>
                    800MW
                  </Card.Title>
                  <Card.Text>
                    Development of the largest <br /> photovoltaic project in Europe
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">

                <Card.Body>
                  <Card.Title>
                    +500MW
                  </Card.Title>
                  <Card.Text>
                    in COD phase (c. € 600M transaction value)
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
        </>
    )
}
