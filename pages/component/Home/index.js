import Head from 'next/head'
import { useState } from 'react'
import styles from './Home.module.css'
import NavBar from './NavBar';
import About from './About';
import AboutDetail from './AboutDetail';
import Features from './Features'
import Pricing from './Pricing'
import Sponsor from './Sponsor'
import Testimonials from './Testimonials'
import Subscribe from './Subscribe'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <About />
        <AboutDetail />
        <Features />
        <div className={styles.MiddleContainer}>
          <div className="wrapper">
            <Pricing />
            <Sponsor />
            {/* <Testimonials /> */}
          </div>
          <Testimonials />
        </div>
        <div className={styles.Footer}>
          <div className="wrapper">
          <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home;
