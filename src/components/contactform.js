import React from "react"
import "./contactform.css"
import { Form, Col, Row, Button } from 'react-bootstrap'

export default function Contactform() {
    return (
        <>
          <div className="contactform">
            <Form method="post" action="https://formspree.io/f/mwkwyqap">
              <Row className="contactrow">
                <Col>
                  <Form.Control placeholder="First name" className="placeholder" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" className="placeholder"/>
                </Col>
              </Row>
              <Row className="contactrow">
                <Col>
                  <Form.Control placeholder="Email" name="_replyto" className="placeholder"/>
                </Col>
                <Col>
                  <Form.Control placeholder="Tel" className="placeholder"/>
                </Col>
              </Row>
              <Row className="contactrow">
                <Col>
                  <Form.Control placeholder="Message" className="placeholder"/>
                </Col>
              </Row>
              <Row className="contactrow">
                <Col>
                  <Button variant="primary" type="submit">
                    submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </>
    )
}


