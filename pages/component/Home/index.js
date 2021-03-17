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
                <Header />
                <Overview />
                <div className={styles.sectionMiddleContainer}>
                    <div className="wrapper">
                    <Contagion />
                    <Symptomps />
                    <Treadment />
                    <Map />
                    </div>
                </div>
                <div className={styles.sectionFooter}>
                    <div className="wrapper">
                        <Subscribe />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;