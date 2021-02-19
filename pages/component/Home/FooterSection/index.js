import Logo from '@public/logo.png';
import styles from './style.module.css';
import igIcon from '@public/instagram_icon.png';
import twitterIcon from '@public/twitter_icon.png';
import facebookIcon from '@public/facebook_icon.png';


const FooterSection = () => {
    return <div className={styles.footerContainer}>
        <div className={styles.bannerContainer}>
            <div data-description>
                <div data-title>
                    Subscribe Now for Get Special Features!
                </div>
                <div data-subtitle>
                    Let's subscribe with us and find the fun.
                </div>
            </div>
            <div>
                <div data-action>
                    Subscribe Now
                </div>
            </div>
        </div>
        <div className={styles.descriptionFooter}>
            <img src={Logo} alt="logo" />
            <div className={styles.description}><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</div>
            <div className={styles.socialMedia}>
                <div data-button>
                    <img src={igIcon} alt="instagram icon" />
                </div>
                <div data-button>
                    <img src={twitterIcon} alt="twitter icon" />
                </div>
                <div data-button>
                    <img src={facebookIcon} alt="facebook icon" />
                </div>
            </div>
            <div className={styles.copyrightText}>
                ©2020LaslesVPN
            </div>
        </div>
        <div className={styles.navigationLink}>
            <ul>
                <li className={styles.title}>Product</li>
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Server</li>
                <li>Countries</li>
                <li>Blog</li>
            </ul>

            <ul>
                <li className={styles.title}>Engage</li>
                <li>LaslesVPN ? </li>
                <li>FAQ</li>
                <li>Tutorials</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>

            <ul>
                <li className={styles.title}>Earn Money</li>
                <li>Affiliate</li>
                <li>Become Partner</li>
            </ul>
        </div>
    </div>
}

export default FooterSection;