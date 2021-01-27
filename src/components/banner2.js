import React from "react"
import "./banner2.css"

import { Container, Row, Col, Card } from 'react-bootstrap'
import tower from './../components/images/tower.png'
import map from './../components/images/map.png'
import grafica from './../components/images/graph.png'
import lupa from './../components/images/lupa.png'
import hq from './../components/images/hq.jpg'



export default function HeaderTwo() {
    return (
        <>
        <div className="bg-pic2">
          <div className="box2">
            <div className="bannertext2">
              <h1>
               Sabel Green desarrolla, gestiona e invierte en activos de energías renovables en Europa Latinoamérica
               África desde la originación hasta la fase operativa. Nuestra estrategia permite minimizar los riesgos
               asociados al terreno, el desarrollo y la comercialización de los activos, maximizando el valor y la
               rentabilidad para los inversores. Nuestro modelo de negocio se basa en:
              </h1>
            </div>

            <div class="cards">
              <Card className="card2">
                <Card.Img variant="top" src={tower} alt='cellphone tower' />
                <Card.Body>
                  <Card.Text className='card-text2 '>
                    Ánalisis e identificación de puntos de conexión no evidentes, considerando las distintas
                    oportunidades disponibles en cada locaclización </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card3">
                <Card.Img variant="top" src={map} alt='map img' />
                 <Card.Body>
                  <Card.Text className='card-text2'>Identificación y acuerdo de terrenos previo al desarrollo de los proyectos
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card3">
                <Card.Img variant="top" src={grafica} alt='graphic img' />
                <Card.Body>
                  <Card.Text className='card-text2 '>Optimización de la asignación de capital en cada fase de la inversión del activo
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card2">
                <Card.Img variant="top" src={lupa} alt='magnifying glass img' />
                <Card.Body>
                  <Card.Text className='card-text2'>Supervisión y seguimiento operativo y comercial de cada activo
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>

        </div>


            <div className='solarBuilding'>
            </div>
        </>
    )
}


