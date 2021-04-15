import styles from './NavBar.module.css'

function NavBar() {
    return (
        <nav className={styles.nav}>
            <ul>
                <img src="/logo.png"></img>
                <li>About</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>Help</li>
                <li className={styles.signIn}>Sign In</li>
                <button className={styles.signUp} type="button">Sign Up</button>
            </ul>
        </nav>
    );
}

export default NavBar;