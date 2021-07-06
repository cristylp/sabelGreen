import React from "react"
import "./contactform.css"
import { Form, Col, Row, Button } from 'react-bootstrap'

export default function ContactformEn() {
    return (
        <>

          <div className='contactbox' id="contacto">
            <div class="contact-box">
              <div className="contacttext">
                <h1>Contact us-Sabel Green</h1>
                <p>+34 617 325 903</p>
                <p>sabelgreen@sabelgreen.com</p>
              </div>

              <div className="contactform">
              <Form method="post" action="https://formspree.io/f/mwkwyqap">

                    <Col className="contactrow">
                      <Form.Control placeholder="Name" className="placeholder" />
                    </Col>

                    <Col className="contactrow">
                      <Form.Control placeholder="Email" name="_replyto" className="placeholder"/>
                    </Col>

                    <Col className="contactrow">
                      <Form.Control placeholder="Message" className="placeholder-message"/>
                    </Col>

                    <Col className="contactrow">
                      <Button id="btn" type="submit">
                        Send
                      </Button>
                    </Col>

                </Form>
              </div>

            </div>

            <div class="contact-img">

            </div>
          </div>
        </>
    )
}
