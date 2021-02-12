import React from "react"
import "./banner4.css"

import { Container, Row, Col, Card } from 'react-bootstrap'
import cloud from './../components/images/cloud.png'
import graph from './../components/images/graph2.png'
import bulb from './../components/images/plant2.png'
import plant from './../components/images/plant.png'


export default function HeaderFourEn() {
    return (
        <>
          <div className="bigpic-4">

            <div className="bannertext2">
              <h2>
               Asset Management
              </h2>
            </div>

            <div class="cards2">
              <Card className="card4">
                <Card.Img variant="top" src={cloud} alt='cellphone tower' />
                <Card.Body>
                  <Card.Text className='card-text2 '>
                    Sabel Green is developing hundreds of MW of capacity worldwide,
                    leveraging the implementation of innovative technologies, based on the use of
                    natural resources.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card5">
                <Card.Img variant="top" src={graph} alt='map img' />
                 <Card.Body>
                  <Card.Text className='card-text2'>
                    Sabel Green promotes a change in the energy consumption model, contributing to the energy independence of consumers.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card5">
                <Card.Img variant="top" src={bulb} alt='graphic img' />
                <Card.Body>
                  <Card.Text className='card-text2 '>
                    Sabel Green contributes to the sustainable development of the planet through the production of renewable energy taking advantage of safe, clean and inexhaustible natural resources.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card4">
                <Card.Img variant="top" src={plant} alt='magnifying glass img' />
                <Card.Body>
                  <Card.Text className='card-text2'>
                    Our growth is based on the search for innovative technology that allows the massive production of clean and sustainable energy, which represents one of the great challenges of our time.
                  </Card.Text>
                </Card.Body>
              </Card>

          </div>

        </div>
        </>
    )
}
