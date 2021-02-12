import React from "react"
import "./icons.css"

import { Card, Col, Row, Container} from 'react-bootstrap'
import hands from "./../components/images/hands.png"
import battery from "./../components/images/battery.png"
import construction from "./../components/images/construction.png"
import world from "./../components/images/world.png"


export default function Cards() {
    return (
        <>
          <div className="box" id="cards">

              <Card className="card1">
                <Card.Img variant="top" src={hands} alt='handshake' style={{opacity:'50%'}}/>
                <Card.Body>
                  <Card.Title style={{opacity:'74%'}}>+50 años</Card.Title>
                  <Card.Text style={{opacity:'74%'}}>de experiencia <br /> agregada</Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">
                <Card.Img variant="top" src={battery} alt='battery img' style={{opacity:'50%'}} />
                <Card.Body>
                  <Card.Title>+500 MW</Card.Title>
                  <Card.Text>en desarrollo</Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">
                <Card.Img variant="top" src={construction} alt='construction tower' style={{opacity:'50%'}} />
                <Card.Body>
                  <Card.Title>+15 proyectos</Card.Title>
                  <Card.Text>en desarrollo</Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">
                <Card.Img variant="top" src={world} alt='world img' style={{opacity:'50%'}}/>
                <Card.Body>
                  <Card.Title>Internacional</Card.Title>
                  <Card.Text>presencia en<br />España y México</Card.Text>
                </Card.Body>
              </Card>


            </div>
        </>
    )
}











