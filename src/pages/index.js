import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css"
// import Languages from "../components/layout/languages"
import Navbar from "../components/layout/navbar"
import Header from "../components/banner"
import Sabel from "../components/sabel"
import Areas from "../components/desarrollo"
import Gestion from "../components/gestion"
import Optimizacion from "../components/optimizacion"
import Subbaner from "../components/subbaner"
import MapSolar from "../components/mapsolar"
import Contactform from "../components/contactform"
import Footer from "../components/layout/footer"


export default function Home(){

    return (
      <div className="App">

        <Navbar/>

        <Header />

        <Sabel />

        <Areas/>

        <Gestion />

        <Subbaner/>

        <Optimizacion/>

        <MapSolar/>

        <Contactform/>

        <Footer/>

      </div>
    );

}   

