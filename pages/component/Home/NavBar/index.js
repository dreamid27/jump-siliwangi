import styles from './NavBar.module.css'

function NavBar() {
    return(
        <div className={styles.navbarContainer}>
            <div>
                <img src='/logo.png' ></img>
            </div>
            <div className={styles.navbarList}>
                <a>Overview</a>
                <a>Contagion</a>
                <a>Symptoms</a>
                <a>Prevention</a>
            </div>
            <div className={styles.actionContainer}>
                <button className={styles.contact}>Contact</button>
            </div>
        </div>
    )
}

export default NavBar;