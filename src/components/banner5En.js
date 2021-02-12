import React from "react"
import "./banner5.css"

import { Container, Row, Col, Card } from 'react-bootstrap'
import factory from './../components/images/factory.png'
import piggy from './../components/images/piggy.png'
import reuse from './../components/images/reuse.png'
import graph3 from './../components/images/graph3.png'


export default function HeaderFiveEn() {
    return (
        <>
           <div className="bigpic-5">

            <div className="bannertext2">
              <h2>
                Energy optimization and self-consumption
              </h2>
            </div>

            <div class="cards2">
              <Card className="card4">
                <Card.Img variant="top" src={factory} alt='cellphone tower' />
                <Card.Body>
                  <Card.Text className='card-text2 '>
                    Development of self-consumption projects for seaports, logistics parks, industries with high energy demand, cryptocurrency mining and real estate promotions.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card5">
                <Card.Img variant="top" src={piggy} alt='map img' />
                 <Card.Body>
                  <Card.Text className='card-text2'>
                    C.80% reduction in energy cost with amortization of investment in 5 years.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card5">
                <Card.Img variant="top" src={reuse} alt='graphic img' />
                <Card.Body>
                  <Card.Text className='card-text2 '>
                    Optimization of energy and industrial processes through the development and engineering of self-consumption projects.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card4">
                <Card.Img variant="top" src={graph3} alt='magnifying glass img' />
                <Card.Body>
                  <Card.Text className='card-text2'>
                    Distributed generation, reduction of operating costs and increased profitability of investments and projects.
                  </Card.Text>
                </Card.Body>
              </Card>

          </div>

        </div>
        </>
    )
}
