import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
// import Languages from "../components/layout/languages"
import NavbarEn from "../components/layout/navbarEn"
import HeaderEn from "../components/bannerEn"
import SabelEn from "../components/sabel"
import AreasEn from "../components/desarrolloEn"
import GestionEn from "../components/gestionEn"
import OptimizacionEn from "../components/optimizacionEn"
import SubbanerEn from "../components/subbanerEn"
import MapSolarEn from "../components/mapsolarEn"
import ContactformEn from "../components/contactformEn"
import Footer from "../components/layout/footer"


export default function Home(){

    return (
      <div className="App">

        <NavbarEn/>

        <HeaderEn />

        <SabelEn />

        <AreasEn/>

        <GestionEn />

        <SubbanerEn/>

        <OptimizacionEn/>

        <MapSolarEn/>

        <ContactformEn/>

        <Footer/>

        <Footer/>

      </div>
    );

} 
