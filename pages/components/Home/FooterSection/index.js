import Link from "next/link";
import styles from "./Footer.module.scss";
import Logo from "@public/logo.png";

function FooterSection() {
    return (
        <div className={styles.footer}>
            <div className={styles.innerFooter}>
                <div className={styles.footerItems}>
                    <Link href="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <p>
                        <b>LaslesVPN</b> is a private virtual network that has
                        unique features and has high security.
                    </p>
                    <div class="footer-bottom">
                        &copy;2020Lasles<b>VPN</b>
                    </div>
                </div>

                <div className={styles.footerItems}>
                    <h3>Quick Links</h3>
                    <div className={styles.border1}></div>
                    <ul>
                        <a href="#">
                            <li>Home</li>
                        </a>
                        <a href="#">
                            <li>Search</li>
                        </a>
                        <a href="#">
                            <li>Contact</li>
                        </a>
                        <a href="#">
                            <li>About</li>
                        </a>
                    </ul>
                </div>

                <div className={styles.footerItems}>
                    <h3>Recipes</h3>
                    <div className={styles.border1}></div>
                    <ul>
                        <a href="#">
                            <li>Indian</li>
                        </a>
                        <a href="#">
                            <li>Chinese</li>
                        </a>
                        <a href="#">
                            <li>Mexican</li>
                        </a>
                        <a href="#">
                            <li>Italian</li>
                        </a>
                    </ul>
                </div>

                <div className={styles.footerItems}>
                    <h3>Contact us</h3>
                    <div className={styles.border1}></div>
                    <ul>
                        <li>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            XYZ, abc
                        </li>
                        <li>
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            123456789
                        </li>
                        <li>
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            xyz@gmail.com
                        </li>
                    </ul>

                    <div className={styles.socialMedia}>
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-google-plus-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FooterSection;
