import React from "react"
import "./banner3.css"

import {  Row, Col } from 'react-bootstrap'


export default function HeaderTree() {
    return (
        <>
            <div className="bg-pic3" id="areas">
                    <h1 className='banner-text3'>Desarrollo de proyectos</h1>
                    <div class="rows">
                      <div class="rows2">
                        <div class="row2 backgroundcolor">
                          <h2 className='mainText'>Ánalisis especial</h2>
                          <p className="secundaryText"><b>Análisis del mercado</b>, de la inversión, de los entornos fiscales y de las oportunidades. <br /> <b>Identificación, análisis de prefactibilidad</b> de las localizaciones óptimas y cercanos a las SETs de cada proyecto. <br /> <b>Negociación y acuerdo de terrenos.</b> <br /> <b>Diseño de calendario</b> de proyecto. </p>
                        </div>

                        <div class="row2">
                          <h2 className='mainText'>Programación del Desarrollo</h2>
                          <p className="secundaryText"><b>Constitución de las sociedades</b> específicas de proyecto (SPV) y diseño de la estructura de cada transacción. <br /> <b>Identificaciónde los permisos necesarios</b> dependiendo del país donde se realice. <br /> <b>Diseño de los planes de desarrollo y construcción,</b> definición de presupuestos y definición de calendarios detallados de costes.</p>
                        </div>
                      </div>

                      <div className="rows2">
                        <div class="row2 backgroundcolor">
                          <h2 className='mainText'>Ingeniería</h2>
                          <p className="secundaryText"><b>Análisis del mercado</b>, de la inversión, de los entornos fiscales y de las oportunidades. <br /> <b>Identificación, análisis de prefactibilidad</b> de las localizaciones óptimas y cercanos a las SETs de cada proyecto. <br /> <b>Negociación y acuerdo de terrenos.</b> <br /> <b>Diseño de calendario</b> de proyecto.</p>
                        </div>

                        <div class="row2">
                          <h2 className='mainText'>PLA</h2>
                          <p className="secundaryText"><b>Obtención de Permisos, Licencias y Autorizaciones</b> necesarias para la construcción y puesta comercial (COD) de cada proyecto. <br />Elaboración de informes de seguimiento.<br /> <b>Interlocución</b> con los organismos correspondientes.<br /> Obtención de los Permisos, <b>Licencias y Autorizaciones</b> necesarios como por ejemplo: Conexión, Licencia de Generación, Permisos Municipales y Licencia Ambiental y Social.</p>
                        </div>
                      </div>

                    </div>

            </div>

        </>
    )
}


