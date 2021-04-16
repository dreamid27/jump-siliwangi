import Link from "next/link";
import styles from "./Footer.module.scss";
import Logo from "@public/logo.png";

function FooterSection() {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.footer}>
                    <div className={styles.subscribe}>
                        <div className={styles.left}>
                            <h1>Subscribe Now for Get Special Features!</h1>
                            <p>Let's subscribe with us and find the fun.</p>
                        </div>
                        <div className={styles.button}>Subscribe Now</div>
                    </div>
                    <div className={styles.innerFooter}>
                        <div className={styles.footerItems}>
                            <Link href="/">
                                <img src={Logo} alt="logo" />
                            </Link>
                            <p>
                                <b>LaslesVPN</b> is a private virtual network
                                that has unique features and has high security.
                            </p>
                            <div className={styles.socialMedia}>
                                <a href="#">
                                    <img src="/Facebook.png" />
                                </a>
                                <a href="#">
                                    <img src="/Instagram.png" />
                                </a>
                                <a href="#">
                                    <img src="/Twitter.png" />
                                </a>
                            </div>
                            <div className={styles.footerBottom}>
                                &copy;2020Lasles<b>VPN</b>
                            </div>
                        </div>

                        <div className={styles.footerItemsProduct}>
                            <h3>Product</h3>
                            <ul>
                                <a href="#">
                                    <li>Download</li>
                                </a>
                                <a href="#">
                                    <li>Pricing</li>
                                </a>
                                <a href="#">
                                    <li>Locations</li>
                                </a>
                                <a href="#">
                                    <li>Servers</li>
                                </a>
                                <a href="#">
                                    <li>Countries</li>
                                </a>
                                <a href="#">
                                    <li>Blog</li>
                                </a>
                            </ul>
                        </div>

                        <div className={styles.footerItemsProduct}>
                            <h3>Engage</h3>
                            <div className={styles.border1}></div>
                            <ul>
                                <a href="#">
                                    <li>LaslesVPN ?</li>
                                </a>
                                <a href="#">
                                    <li>FAQ</li>
                                </a>
                                <a href="#">
                                    <li>Tutorials</li>
                                </a>
                                <a href="#">
                                    <li>About Us</li>
                                </a>
                                <a href="#">
                                    <li>Privacy Policy</li>
                                </a>
                                <a href="#">
                                    <li>Terms of Service</li>
                                </a>
                            </ul>
                        </div>

                        <div className={styles.footerItemsProduct}>
                            <h3>Earn Money</h3>
                            <div className={styles.border1}></div>
                            <ul>
                                <a href="#">
                                    <li>Affiliate</li>
                                </a>
                                <a href="#">
                                    <li>Become Partner</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FooterSection;
