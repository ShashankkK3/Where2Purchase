import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar.jsx'
import Content from './Content.jsx'
import Working from './working.jsx'
import InfoRibbon from './infoRibbon.jsx'
import Guide from './Guide.jsx'
import Reviews from './reviews.jsx'
import FootRibbon from './footribbon.jsx'
import Footer from './footer.jsx'

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
