import styles from './Footer.module.css';
import logo from '@public/logo.png';
import facebook from '@public/facebook.png';
import youtube from '@public/youtube.png';
import vimeo from '@public//vimeo.png';
import twitter from '@public/twitter.png';
import background from '@public/bgfooter1.png';
import background2 from '@public/bgfooter2.png';

function Footer(){
    return(
        <div className={styles.footerContainer}>
            <div className={styles.background}><img src={background}></img></div>
            <div className={styles.background2}><img src={background2}></img></div>
            <div className={styles.footerTop}>
                <div className={styles.footerLogo}>
                    <img src={logo}></img>
                </div>
                <div className={styles.footerList}>
                    <ul>
                        <li><a href="#Navbar">Overview</a></li>
                        <li><a href="#Symptoms">Symptoms</a></li>
                        <li><a href="#Prevention">Prevention</a></li>
                        <li><a href="#Prevention">Treadment</a></li>
                    </ul>
                </div>
                <div className={styles.footerImg}>
                    <a href="https://facebook.com/" target="_blank"><img src={facebook}></img></a>
                    <a href="https://www.youtube.com/" target="_blank"><img src={youtube}></img></a>
                    <a href="https://vimeo.com/" target="_blank"><img src={vimeo}></img></a>
                    <a href="https://twitter.com" target="_blank"><img src={twitter}></img></a>
                </div>
            </div>
            <div className={styles.footerBottom}>
                2020 @ All rights reserved by pixelspark.co
            </div>
        </div>
    )
}

export default Footer;