import styles from './Footer.module.css';
import logo from '@public/logo.png';
import facebook from '@public/facebook.png';
import youtube from '@public/youtube.png';
import vimeo from '@public//vimeo.png';
import twitter from '@public/twitter.png';

function Footer(){
    return(
        <div className={styles.footerContainer}>
            <div className={styles.footerTop}>
                <div className={styles.footerLogo}>
                    <img src={logo}></img>
                </div>
                <div className={styles.footerList}>
                    <ul>
                        <li>Overview</li>
                        <li>Symptoms</li>
                        <li>Prevention</li>
                        <li>Treadment</li>
                    </ul>
                </div>
                <div className={styles.footerImg}>
                    <img src={facebook}></img>
                    <img src={youtube}></img>
                    <img src={vimeo}></img>
                    <img src={twitter}></img>
                </div>
            </div>
            <div className={styles.footerBottom}>
                2020 @ All rights reserved by pixelspark.co
            </div>
        </div>
    )
}

export default Footer;