import React from "react"
import "./banner2.css"

import { Container, Row, Col, Card } from 'react-bootstrap'
import tower from './../components/images/tower.png'
import map from './../components/images/map.png'
import grafica from './../components/images/graph.png'
import lupa from './../components/images/lupa.png'
import hq from './../components/images/hq.jpg'



export default function HeaderTwoEn() {
    return (
        <>
        <div className="bg-pic2">
          <div className="box2">
            <div className="bannertext2">
              <h1>
               Sabel Green develops, manages and invests in renewable energy assets in Europe, Latin America
               and Africa from origination to operational phase. Our strategy allows us to minimize risks
               associated with the land, development and commercialization of assets, maximizing the value and
               profitability for investors. Our business model is based on:
              </h1>
            </div>

            <div class="cards">
              <Card className="card2">
                <Card.Img variant="top" src={tower} alt='cellphone tower' />
                <Card.Body>
                  <Card.Text className='card-text2 '>
                    Analysis and identification of non-obvious connection points
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card3">
                <Card.Img variant="top" src={map} alt='map img' />
                 <Card.Body>
                  <Card.Text className='card-text2'>
                    Identification and agreement of land prior to the development of projects
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card3">
                <Card.Img variant="top" src={grafica} alt='graphic img' />
                <Card.Body>
                  <Card.Text className='card-text2 '>
                    Optimization of capital allocation in each phase of asset investment
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card2">
                <Card.Img variant="top" src={lupa} alt='magnifying glass img' />
                <Card.Body>
                  <Card.Text className='card-text2'>
                    Supervision and operational and commercial monitoring of each asset
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

        </div>


            <div className='solarBuilding' style={{opacity: '60%'}}>
            </div>
        </>
    )
}


