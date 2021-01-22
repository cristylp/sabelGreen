import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from "../components/layout/navbar"
import Header from "../components/banner"
import Cards from "../components/infoCards"
import HeaderTwo from "../components/banner2"
import HeaderTree from "../components/banner3"


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

    </>
    
  )
}