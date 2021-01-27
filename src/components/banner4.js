import React from "react"
import "./banner4.css"

import { Container, Row, Col, Card } from 'react-bootstrap'
import cloud from './../components/images/cloud.png'
import graph from './../components/images/graph2.png'
import bulb from './../components/images/plant2.png'
import plant from './../components/images/plant.png'


export default function HeaderFour() {
    return (
        <>
          <div className="bigpic-4">

            <div className="bannertext2">
              <h2>
               Gestión de Activos
              </h2>
            </div>

            <div class="cards2">
              <Card className="card4">
                <Card.Img variant="top" src={cloud} alt='cellphone tower' />
                <Card.Body>
                  <Card.Text className='card-text2 '>
                    Sabel Green está desarrollando cientos de MW de capacidad a nivel mundial,
                    apalancándose en la implementación de tecnologpias innovadoras, basadas en el uso de
                    recursos naturales.</Card.Text>
                </Card.Body>
              </Card>

              <Card className="card5">
                <Card.Img variant="top" src={graph} alt='map img' />
                 <Card.Body>
                  <Card.Text className='card-text2'>Sabel Green impulsa el cambio de modelo de consumo de energía, contribuyendo a la independencia energética de los consumidores.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card5">
                <Card.Img variant="top" src={bulb} alt='graphic img' />
                <Card.Body>
                  <Card.Text className='card-text2 '> Sabel Green contribuye al desarrollo sostenible del planeta a través de la producción de energía renovables aprovechando recursos naturales seguros, limpios e inagotables.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="card4">
                <Card.Img variant="top" src={plant} alt='magnifying glass img' />
                <Card.Body>
                  <Card.Text className='card-text2'>Nuestro crecimiento se basa en la búsqueda de tecnología innovadora que permita la producción masiva de energía limpia y sostenible, lo que representa uno de los grandes desafios de nuestro tiempo.
                  </Card.Text>
                </Card.Body>
              </Card>

          </div>

        </div>
        </>
    )
}
