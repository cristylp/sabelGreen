import React from "react"
import "./banner5.css"

import { Container, Row, Col, Card } from 'react-bootstrap'
import factory from './../components/images/factory.png'
import piggy from './../components/images/piggy.png'
import reuse from './../components/images/reuse.png'
import graph3 from './../components/images/graph3.png'


export default function HeaderFive() {
    return (
        <>
           <div className="bigpic-5">

            <div className="bannertext2">
              <h2>
               Optimización energética y autoconsumo
              </h2>
            </div>

            <div class="cards2">
              <Card className="card4">
                <Card.Img variant="top" src={factory} alt='cellphone tower' />
                <Card.Body>
                  <Card.Text className='card-text2 '>
                    Desarrollo de proyectos de autoconsumo para puertos marítimos, parques logísticos, industrias con alta demanda energética, minado de criptomonedas y promociones inmobiliarias.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card5">
                <Card.Img variant="top" src={piggy} alt='map img' />
                 <Card.Body>
                  <Card.Text className='card-text2'>Reducción de c.80% del coste energético con amortización de inversión en 5 años.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card5">
                <Card.Img variant="top" src={reuse} alt='graphic img' />
                <Card.Body>
                  <Card.Text className='card-text2 '> Optimización de procesos energéticos e industriales mediante el desarrollo y la ingeniería de proyectos de autoconsumo.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card4">
                <Card.Img variant="top" src={graph3} alt='magnifying glass img' />
                <Card.Body>
                  <Card.Text className='card-text2'>Generación distribuida, reducción de costes operativos y aumento de rentabilidad de inversiones y proyectos.
                  </Card.Text>
                </Card.Body>
              </Card>

          </div>

        </div>
        </>
    )
}
