import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ListingDetails from './ListingDetails'
import FooterBottom from '../components/FooterBottom'

function Home() {
  return (
    <div>
      <Navbar />
      <ListingDetails />
      <Footer />
      <FooterBottom />
    </div>
  )
}

export default Home


// what home page show?

// Home page show the categories + listing. Home page of the Airbnb project
