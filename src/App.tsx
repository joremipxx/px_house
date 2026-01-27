import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Hotels from './components/Hotels'
import ResidencyBanner from './components/ResidencyBanner'
import Activities from './components/Activities'
import Protocols from './components/Protocols'
import Gallery from './components/Gallery'
import PartOfParadox from './components/PartOfParadox'
import Ecosystem from './components/Ecosystem'
import Booking from './components/Booking'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import './App.css'

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  return (
    <>
      <Navigation />
      <div className="relative w-full bg-paradox-bg">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="hotels">
        <Hotels />
      </div>
      <div id="activities">
        <Activities />
      </div>
      <Protocols />
      <ResidencyBanner />
      <Gallery />
      <PartOfParadox onBookNow={() => setIsBookingModalOpen(true)} />
      <Ecosystem />
      <div id="booking">
        <Booking onBookNow={() => setIsBookingModalOpen(true)} />
      </div>
      <Footer />
      </div>
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  )
}

export default App
