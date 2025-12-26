import React from 'react'
import './App.css'
import NavbarPage from './pages/common/Navbar'
import HeroPage from './pages/common/Hero'
import ServicesSectionPage from './pages/common/ServicesSection'
import RatingsSectionPage from './pages/common/RatingsSection'
import CTASection from './pages/common/CTASection'
import FooterPage from './pages/common/Footer'
function App() {

  return (
    <>
      <NavbarPage />
      <HeroPage />
      <ServicesSectionPage />
      <RatingsSectionPage />
      <CTASection />
      <FooterPage />
    </>
  )
}

export default App
