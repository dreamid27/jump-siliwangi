import Logo from '@public/logo.png';
import styles from './Menu.module.css';

const menuList = [
    {
        label: 'About',
        url: '/about',
    },
    {
        label: 'Features',
        url: '/features',
    },
    {
        label: 'Pricing',
        url: '/pricing',
    },
    {
        label: 'Testimonials',
        url: '/testimonials',
    },
    {
        label: 'Help',
        url: '/help',
    }
]

const Menu = () => {
    return <div className={styles.menuContainer}>
        <div>
            <img src={Logo} alt="logo" />
        </div>
        <div className={styles.pathList}>
            {menuList.map((obj) => <a href={obj.url}>{obj.label}</a>)}
        </div>
        <div className={styles.actionContainer}>
            <a className={styles.signInButton} onClick={() => dataLayer.push({'event': 'Click SignIn'})}>
                Sign In
            </a>
            <a className={styles.signUpButton}>
                Sign Up
            </a>
        </div>
    </div>
}

export default Menu