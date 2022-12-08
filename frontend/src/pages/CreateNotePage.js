import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import CreateNote from "../components/CreateNote/CreateNote";
import Footer from "../components/Footer/Footer";

function CreateNotePage() {
  return (
    <div><Navbar />
    <CreateNote />
    <Footer /></div>
  )
}

export default CreateNotePage