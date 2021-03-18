import styles from './Home.module.css'
import NavBar from './NavBar'
import Overview from './Overview'
import Header from './Header'
import Contagion from './Contagion'
import Symptomps from './Symptomps'
import Treadment from './Treadment'
import Map from './Map'
import Subscribe from './Subscribe'
import Footer from './Footer'

function Home() {
    return (
        <div className={styles.Container}>
            <div className="wrapper">
                <NavBar />
            </div>
            <div className="wrapper">
                <div className={styles.wrap}>
                    <Header />
                </div>
                <div className={styles.wrap}>
                    <Overview />
                </div>
                <Contagion />
                <Symptomps />
                <div className={styles.wrap}>
                    <Treadment />
                </div>
                <Map />
                <div className={styles.wrap}>
                    <Subscribe />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default Home;