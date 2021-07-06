import React from "react"
import "./optimizacion.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry} from '@fortawesome/free-solid-svg-icons'
import { faPiggyBank} from '@fortawesome/free-solid-svg-icons'
import { faRecycle} from '@fortawesome/free-solid-svg-icons'
import solarpanel from './../components/images/picizq_SabelGreen.jpg'


export default function OptimizacionEn() {
    return (
        <>
          <div id="gestion">
            <div className="content">
              <h1>Energy optimization and self-consumption</h1>
              <p className="content-text">Distributed generation, reduction of operating costs and increased profitability of investments and projects.</p>



              <div className="cards-sabel" id="cards-gestion">
                  <div className="sabel-card" id="sabel-card-gestion">
                    <FontAwesomeIcon icon={faIndustry} className="icon"/>
                    <p className="icon-text">Development of self-consumption projects for seaports, logistics parks, industries with high energy demand, cryptocurrency mining and real estate promotions.</p>
                  </div>

                  <div className="sabel-card" id="sabel-card-gestion-middle">
                    <FontAwesomeIcon icon={faPiggyBank} className="icon"/>
                    <p className="icon-text">C.80% reduction in energy cost with amortization of investment in 5 years.</p>
                  </div>
              </div>


              <div className="cards-sabel-2" id="cards-gestion-2">
                <div className="sabel-card" id="sabel-card-gestion">
                  <FontAwesomeIcon icon={faRecycle} className="icon"/>
                  <p className="icon-text">Optimization of energy and industrial processes through the development and engineering of self-consumption projects.</p>
                </div>
              </div>

            </div>
          </div>
        </>
    )
}
