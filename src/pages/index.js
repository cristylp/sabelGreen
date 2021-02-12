import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Languages from "../components/layout/languages"
import Navbar from "../components/layout/navbar"
import Header from "../components/banner"
import Cards from "../components/icons"
import HeaderTwo from "../components/banner2"
import HeaderTree from "../components/banner3"
import HeaderFour from "../components/banner4"
import HeaderFive from "../components/banner5"
import CardsTwo from "../components/icons2"
import HeaderSix from "../components/banner6"
import Contactform from "../components/contactform"
import MapSolar from "../components/mapsolar"
import Footer from "../components/layout/footer"


export default function Home(){

    return (
      <div className="App">

        <Languages/>

        <Navbar/>

        <Header />

        <Cards />

        <HeaderTwo />

        <HeaderTree />

        <HeaderFour />

        <HeaderFive />

        <HeaderSix />

        <CardsTwo />

        <MapSolar />

        <Contactform/>

        <Footer/>

      </div>
    );

}   

