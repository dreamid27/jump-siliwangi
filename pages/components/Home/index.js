import Head from "next/head";
import styles from "./Home.module.css";
import Nav from "./Nav";
import Hero from "./Hero";
import Features from "./Features";
import Wrapper from "./Wrapper";
import Pricing from "./Pricing";
import Testi from "./Testimonials";
import Partners from "./Partners";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LaslesVPN</title>
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
};

export default Home;
