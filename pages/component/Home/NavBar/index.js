import styles from './NavBar.module.css';
import Logo from '@public/logo.png';

const navbarList = [
    {
        label: 'Overview',
        url: '/overview',
        highlight: true
    },
    {
        label: 'Contagion',
        url: '/contagion',
        highlight: false
    },
    {
        label: 'Symptoms',
        url: '/symptoms',
        highlight: false
    },
    {
        label: 'Prevention',
        url: '/prevention',
        highlight: false
    },
]

function NavBar() {
    return(
        <div className={styles.navbarContainer}>
            <div>
                <img src={Logo} ></img>
            </div>
            <div className={styles.navbarListWrap} >
                {navbarList.map((obj) =>
                    <div className={styles.navbarList}>
                        <a href={obj.url} data-highlight={obj.highlight}> {obj.label} </a>
                        <div className={styles.dotNavbar} data-highlight={obj.highlight}></div>
                    </div>   
                )}
            </div>
            <div className={styles.actionContainer}>
                <button className={styles.contact}>Contact</button>
            </div>
        </div>
    )
}

export default NavBar;