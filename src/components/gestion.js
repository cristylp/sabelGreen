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
              <h1>Gestión de Activos</h1>
              <p className="content-text">Sabel Green está desarrollando cientos de MW de capacidad a nivel mundial, apalancándose en la implementación de tecnologpias innovadoras, basadas en el uso de recursos naturales.</p>



              <div className="cards-sabel" id="cards-gestion">
                  <div className="sabel-card" id="sabel-card-gestion">
                    <FontAwesomeIcon icon={faChartLine} className="icon"/>
                    <p className="icon-text">Sabel Green impulsa el cambio de modelo de consumo de energía, contribuyendo a la independencia energética de los consumidores.</p>
                  </div>

                  <div className="sabel-card" id="sabel-card-gestion-middle">
                    <FontAwesomeIcon icon={faLightbulb} className="icon"/>
                    <p className="icon-text">Sabel Green contribuye al desarrollo sostenible del planeta a través de la producción de energía renovables aprovechando recursos naturales seguros, limpios e inagotables.</p>
                  </div>
              </div>


              <div className="cards-sabel-2" id="cards-gestion-2">
                <div className="sabel-card" id="sabel-card-gestion">
                  <FontAwesomeIcon icon={faSeedling} className="icon"/>
                  <p className="icon-text">Nuestro crecimiento se basa en la búsqueda de tecnología innovadora que permita la producción masiva de energía limpia y sostenible, lo que representa uno de los grandes desafios de nuestro tiempo.</p>
                </div>
              </div>


            </div>
          </div>
        </>
    )
}
