import React from "react"
import "./sabel.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake} from '@fortawesome/free-solid-svg-icons'
import { faBatteryFull} from '@fortawesome/free-solid-svg-icons'
import { faHardHat} from '@fortawesome/free-solid-svg-icons'
import { faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'


export default function CardsEn() {
    return (
        <>
          <div class="sabel-box" id="sabel">
            <div className="content">
              <h1>
                Sabel Green
              </h1>
              <p className="content-text">Sabel Green develops, manages and invests in renewable energy assets in Europe, Latin America and Africa from origination to operational phase. Our strategy allows us to minimize the risks associated with the land, the development and the commercialization of assets, maximizing the value and profitability for investors.</p>
              <div className="parragraph">
                <h2>Our business model is based on:</h2>
                <ul>
                  <li>
                    Analysis and identification of non-obvious connection points
                  </li>
                  <li>
                   Identification and agreement of land prior to the development of the
                   projects
                  </li>
                  <li>
                    Optimization of capital allocation in each phase of asset investment
                  </li>
                  <li>
                  Supervision and operational and commercial monitoring of each asset
                  </li>
                </ul>
              </div>

                <div className="cards-sabel">
                  <div className="sabel-card">
                    <FontAwesomeIcon icon={faHandshake} className="icon"/>
                    <h3 className="icon-title">+50 years</h3>
                    <p className="icon-text">of added experience</p>
                  </div>

                  <div className="sabel-card">
                    <FontAwesomeIcon icon={faGlobeAmericas} className="icon"/>
                    <h3 className="icon-title">International</h3>
                    <p className="icon-text">presence in Spain and Mexico</p>
                  </div>
                </div>


                <div className="cards-sabel-2">
                  <div className="sabel-card" >
                    <FontAwesomeIcon icon={faBatteryFull} className="icon"/>
                    <h3 className="icon-title">+500 MW</h3>
                    <p className="icon-text">Developing</p>
                  </div>

                  <div className="sabel-card">
                    <FontAwesomeIcon icon={faHardHat} className="icon"/>
                    <h3 className="icon-title">+15 projects</h3>
                    <p className="icon-text">Developing</p>
                  </div>
                </div>

            </div>
          </div>
        </>
    )
}

