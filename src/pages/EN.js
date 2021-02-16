import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

// import LanguagesEn from "../components/layout/languagesEn"
import NavbarEn from "../components/layout/navbarEn"
import HeaderEn from "../components/bannerEn"
import CardsEn from "../components/iconsEn"
import HeaderTwoEn from "../components/banner2En"
import HeaderThreeEn from "../components/banner3En"
import HeaderFourEn from "../components/banner4En"
import HeaderFiveEn from "../components/banner5En"
import CardsTwoEn from "../components/icons2"
import HeaderSixEn from "../components/banner6En"
import ContactformEn from "../components/contactformEn"
import MapSolar from "../components/mapsolar"
import Footer from "../components/layout/footer"


export default function Home(){

    return (
      <div className="App">

        <NavbarEn/>

        <HeaderEn />

        <CardsEn />

        <HeaderTwoEn />

        <HeaderThreeEn />

        <HeaderFourEn />

        <HeaderFiveEn />

        <HeaderSixEn />

        <CardsTwoEn />

        <MapSolar />

        <ContactformEn/>

        <Footer/>

      </div>
    );

} 
