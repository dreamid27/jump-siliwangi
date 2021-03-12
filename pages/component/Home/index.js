import styles from './Home.module.css'
import NavBar from './NavBar'
import Overview from './Overview'
import Header from './Header'
import Contagion from './Contagion'
import Symptomps from './Symptomps'
import Symtomps from './Symptomps'

function Home() {
    return (
        <div>
            <div className="wrapper">
                <NavBar />
            </div>
            <div>
                <Header />
                <Overview />
                <div className={styles.sectionMiddleContainer}>
                    <div className="wrapper">
                    <Contagion />
                    <Symtomps />
                    </div>
                </div>
                <div className={styles.sectionFooter}>
                    <div className="wrapper">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;