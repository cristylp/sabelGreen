import React from "react"
import "./optimizacion.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry} from '@fortawesome/free-solid-svg-icons'
import { faPiggyBank} from '@fortawesome/free-solid-svg-icons'
import { faRecycle} from '@fortawesome/free-solid-svg-icons'
import solarpanel from './../components/images/picizq_SabelGreen.jpg'


export default function Optimizacion() {
    return (
        <>
          <div id="gestion">
            <div className="content">
              <h1>Optimización energética y autoconsumo</h1>
              <p className="content-text">Generación distribuida, reducción de costes operativos y aumento de rentabilidad de inversiones y proyectos.</p>



              <div className="cards-sabel" id="cards-gestion">
                  <div className="sabel-card" id="sabel-card-gestion">
                    <FontAwesomeIcon icon={faIndustry} className="icon"/>
                    <p className="icon-text">Desarrollo de proyectos de autoconsumo para puertos marítimos, parques logísticos, industrias con alta demanda energética, minado de criptomonedas y promociones inmobiliarias.</p>
                  </div>

                  <div className="sabel-card" id="sabel-card-gestion-middle">
                    <FontAwesomeIcon icon={faPiggyBank} className="icon"/>
                    <p className="icon-text">Reducción de c.80% del coste energético con amortización de inversión en 5 años.</p>
                  </div>
              </div>


              <div className="cards-sabel-2" id="cards-gestion-2">
                <div className="sabel-card" id="sabel-card-gestion">
                  <FontAwesomeIcon icon={faRecycle} className="icon"/>
                  <p className="icon-text">Optimización de procesos energéticos e industriales mediante el desarrollo y la ingeniería de proyectos de autoconsumo.</p>
                </div>
              </div>

            </div>
          </div>
        </>
    )
}
