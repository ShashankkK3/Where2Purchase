import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Content from './Content'
import Working from './working'
import InfoRibbon from './infoRibbon'
import Guide from './Guide'
import Reviews from './reviews'
import FootRibbon from './footribbon'
import Footer from './footer'

function App() {
  

  return (
    <>
    <Navbar />
   <Content/>
   <Working/>
   <InfoRibbon/>
   <Guide/>
   <Reviews/>
   <FootRibbon/>
   <Footer/>
    </>
   
  )
}

export default App