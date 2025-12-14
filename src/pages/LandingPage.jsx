import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import JoinUs from '../components/JoinUs'
import Features from '../components/Features'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <Hero />
      <JoinUs />
      <Features />
      <Partners />
      <Footer />
    </div>
  )
}

export default LandingPage

