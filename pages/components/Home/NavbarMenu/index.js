import Link from 'next/link'
import styles from './Navbar.module.scss'

function Navbar() {
    return (
        <div className={styles.NavContainer}>
            <Link href="/">
                <img src="/logo.png" alt="logo" />
            </Link>
            <ul className={styles.NavLinks}>
                <li>
                    <Link href="/"><a className={styles.NavItem}>About</a></Link>
                </li>
                <li>
                    <Link href="/features"><a className={styles.NavItem}>Features</a></Link>
                </li>
                <li>
                    <Link href="/pricing"><a className={styles.NavItem}>Pricing</a></Link>
                </li>
                <li>
                    <Link href="/testimonial"><a className={styles.NavItem}>Testimonials</a></Link>
                </li>
                <li>
                    <Link href="/help"><a className={styles.NavItem}>Help</a></Link>
                </li>
            </ul>
            <ul className={styles.NavLinks}>
                <li>
                    <Link href="/signin"><a className={styles.SigninItem}>Sign In</a></Link>
                </li>
                <li>
                    <Link href="/signup"><a className={styles.SignupItem}>Sign Up</a></Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar; 