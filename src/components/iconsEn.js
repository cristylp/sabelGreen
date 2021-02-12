import React from "react"
import "./icons.css"

import { Card, Col, Row, Container} from 'react-bootstrap'
import hands from "./../components/images/hands.png"
import battery from "./../components/images/battery.png"
import construction from "./../components/images/construction.png"
import world from "./../components/images/world.png"


export default function CardsEn() {
    return (
        <>
          <div className="box" id="cardsEn">

              <Card className="card1">
                <Card.Img variant="top" src={hands} alt='handshake' style={{opacity:'50%'}}/>
                <Card.Body>
                  <Card.Title style={{opacity:'74%'}}>+50 years</Card.Title>
                  <Card.Text style={{opacity:'74%'}}>of added <br /> experience</Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">
                <Card.Img variant="top" src={battery} alt='battery img' style={{opacity:'50%'}} />
                <Card.Body>
                  <Card.Title>+500 MW</Card.Title>
                  <Card.Text>in development</Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">
                <Card.Img variant="top" src={construction} alt='construction tower' style={{opacity:'50%'}} />
                <Card.Body>
                  <Card.Title>+15 projects</Card.Title>
                  <Card.Text>in development</Card.Text>
                </Card.Body>
              </Card>

              <Card className="card1">
                <Card.Img variant="top" src={world} alt='world img' style={{opacity:'50%'}}/>
                <Card.Body>
                  <Card.Title>International</Card.Title>
                  <Card.Text>presence in <br /> Spain and Mexico</Card.Text>
                </Card.Body>
              </Card>


            </div>
        </>
    )
}
