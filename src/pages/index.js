import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from "../components/layout/navbar"
import Header from "../components/banner"
import Cards from "../components/infoCards"

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

    </>

  
    
  )
}
