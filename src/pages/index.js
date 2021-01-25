import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from "../components/layout/navbar"
import Header from "../components/banner"
import Cards from "../components/icons"
import HeaderTwo from "../components/banner2"
import HeaderTree from "../components/banner3"
import HeaderFour from "../components/banner4"
import HeaderFive from "../components/banner5"
import CardsTwo from "../components/icons2"
import HeaderSix from "../components/banner6"


export default function Home() {
  return (

    <>
      <div>
        <Navigation />
      </div>

     <div>
        <Header />
      </div>

      <div>
        <Cards />
      </div>

      <div>
        <HeaderTwo />
      </div>

      <div>
        <HeaderTree />
      </div>

      <div>
        <HeaderFour />
      </div>

      <div>
        <HeaderFive />
      </div>

      <div>
        <CardsTwo />
      </div>

      <div>
        <HeaderSix />
      </div>

    </>
    
  )
}