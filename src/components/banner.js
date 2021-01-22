import React from "react"
import "./banner.css"

import { Container } from 'react-bootstrap'


export default function Header() {
    return (
        <>
            <div className="bg-pic" style={{ backgroundSize: "cover", height:'800px' }} fluid>
                <Container>
                    <h1 className='banner-text'>Impulsamos el modelo <br /> energético mundial a uno <br /> 100% sostenible y renovable</h1>
                </Container>
            </div>
        </>
    )
}
