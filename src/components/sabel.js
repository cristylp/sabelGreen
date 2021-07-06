import React from "react"
import "./sabel.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake} from '@fortawesome/free-solid-svg-icons'
import { faBatteryFull} from '@fortawesome/free-solid-svg-icons'
import { faHardHat} from '@fortawesome/free-solid-svg-icons'
import { faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'


export default function Cards() {
    return (
        <>
          <div class="sabel-box" id="sabel">
            <div className="content">
              <h1>
                Sabel Green
              </h1>
              <p className="content-text">Sabel Green desarrolla, gestiona e invierte en activos de energías renovables en Europa, Latinoamérica y África desde la originación hasta la fase operativa. Nuestra estrategia permite minimizar los riesgos asociados al terreno, el desarrollo y la comercialización de los activos, maximizando el valor y la rentabilidad para los inversores.</p>
              <div className="parragraph">
                <h2>Nuestro modelo de negocio se basa en:</h2>
                <ul>
                  <li>
                    Ánalisis e identificación de puntos de conexión no evidentes
                  </li>
                  <li>
                    Identificación y acuerdo de terrenos previo al desarrollo de los
                    proyectos
                  </li>
                  <li>
                    Optimización de la asignación de capital en cada fase de la inversión
                    del activo
                  </li>
                  <li>
                    Supervisión y seguimiento operativo y comercial de cada activo
                  </li>
                </ul>
              </div>

                <div className="cards-sabel">
                  <div className="sabel-card">
                    <FontAwesomeIcon icon={faHandshake} className="icon"/>
                    <h3 className="icon-title">+50 años</h3>
                    <p className="icon-text">de experiencia agregada</p>
                  </div>

                  <div className="sabel-card">
                    <FontAwesomeIcon icon={faGlobeAmericas} className="icon"/>
                    <h3 className="icon-title">Internacional</h3>
                    <p className="icon-text">presencia en España y México</p>
                  </div>
                </div>


                <div className="cards-sabel-2">
                  <div className="sabel-card" >
                    <FontAwesomeIcon icon={faBatteryFull} className="icon"/>
                    <h3 className="icon-title">+500 MW</h3>
                    <p className="icon-text">en desarrollo</p>
                  </div>

                  <div className="sabel-card">
                    <FontAwesomeIcon icon={faHardHat} className="icon"/>
                    <h3 className="icon-title">+15 proyectos</h3>
                    <p className="icon-text">en desarrollo</p>
                  </div>
                </div>

            </div>
          </div>
        </>
    )
}











