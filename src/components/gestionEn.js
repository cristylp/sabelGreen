import React from "react"
import "./gestion.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { faSeedling} from '@fortawesome/free-solid-svg-icons'
import solarpanel from './../components/images/picizq_SabelGreen.jpg'


export default function Gestion() {
    return (
        <>
          <div id="gestion">
            <div className="content">
              <h1>Asset Management</h1>
              <p className="content-text">Sabel Green is developing hundreds of MW of capacity worldwide, leveraging the implementation of innovative technologies, based on the use of natural resources.</p>



              <div className="cards-sabel" id="cards-gestion">
                  <div className="sabel-card" id="sabel-card-gestion">
                    <FontAwesomeIcon icon={faChartLine} className="icon"/>
                    <p className="icon-text">Sabel Green promotes the change in the energy consumption model, contributing to the energy independence of consumers.</p>
                  </div>

                  <div className="sabel-card" id="sabel-card-gestion-middle">
                    <FontAwesomeIcon icon={faLightbulb} className="icon"/>
                    <p className="icon-text">Sabel Green contributes to the sustainable development of the planet through the production of renewable energy taking advantage of safe, clean and inexhaustible natural resources.</p>
                  </div>
              </div>


              <div className="cards-sabel-2" id="cards-gestion-2">
                <div className="sabel-card" id="sabel-card-gestion">
                  <FontAwesomeIcon icon={faSeedling} className="icon"/>
                  <p className="icon-text">Our growth is based on the search for innovative technology that allows the massive production of clean and sustainable energy, which represents one of the great challenges of our time.</p>
                </div>
              </div>


            </div>
          </div>
        </>
    )
}
