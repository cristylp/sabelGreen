import React from "react"
import "./navbar.css"

import { Navbar, Nav } from 'react-bootstrap'
import logo from './../images/logogris.png'


export default function Navigation() {
    return (
        <>
            <Navbar sticky="top" className='color-navbar' variant='light' expand='lg'>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="250"
                        height="150"
                        className="d-inline-block align-top"
                        alt="Sabel Green logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link className="font" href="#">Sabel Green</Nav.Link>
                        <Nav.Link className="font" href="#">Mercados</Nav.Link>
                        <Nav.Link className="font" href="#">Áreas de negocio</Nav.Link>
                        <Nav.Link className="font" href="#">Equipo</Nav.Link>
                        <Nav.Link className="font" href="#">Impacto</Nav.Link>
                        <Nav.Link className="font" href="#">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}