import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero/index";
import Features from "./components/Features/index";
import Wrapper from "./components/Wrapper/index";
import Pricing from "./components/Pricing/index";
import Testi from "./components/Testimonials/index";
import Partners from "./components/Partners/index";
import Subscribe from "./components/Subscribe/index";
import Footer from "./components/Footer/index";

export default function Home() {
  const [halo] = useState("LasslesVPN");
  return (
    <div className={styles.container}>
      <Head>
        <title>{halo}</title>
        <link rel="icon" href="icon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Hero />
      <Features />
      <Wrapper />
      <div className={styles["bg-graydark"]}>
        <Pricing />
        <Partners />
        <Testi />
      </div>
      <section className={styles["bg-footer"]}>
        <Footer />
      </section>
      <Subscribe />
    </div>
  );
}
