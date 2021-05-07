import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


export default function About() {
  return (
    <>
      <Head>
        <title>LaslesVPN</title>
      </Head>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="text-title">Want anything to be easy with <b>LaslesVPN</b>.</h1>
            <p className="description">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.</p>

            <Link href="/contact"><a className="cta">Get Started</a></Link>
          </div>

          <div className="image-wrapper">
            <img src="/person.png" />
          </div>
        </div>
      </section>
    </>
  );
}