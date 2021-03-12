import styles from './NavBar.module.css'

const navbarList = [
    {
        label: 'Overview',
        url: '/overview'
    },
    {
        label: 'Contagion',
        url: '/contagion'
    },
    {
        label: 'Symptoms',
        url: '/symptoms'
    },
    {
        label: 'Prevention',
        url: '/prevention'
    },
]

function NavBar() {
    return(
        <div className={styles.navbarContainer}>
            <div>
                <img src='/logo.png' ></img>
            </div>
            <div className={styles.navbarList}>
                {navbarList.map((obj) => 
                    <a href={obj.url}> {obj.label} </a>
                )}
            </div>
            <div className={styles.actionContainer}>
                <button className={styles.contact}>Contact</button>
            </div>
        </div>
    )
}

export default NavBar;