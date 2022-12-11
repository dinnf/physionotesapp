import React from 'react'
import GetNote from '../components/GetNote/GetNote'
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

function GetNotePage() {
  return (
    <div>
        <Navbar />
        <GetNote />
        <Footer />
    </div>
  )
}

export default GetNotePage