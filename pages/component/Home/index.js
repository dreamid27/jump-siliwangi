import styles from './Home.module.css'
import NavBar from './NavBar'
import Overview from './Overview'
import Header from './Header'
import Contagion from './Contagion'

function Home() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <Header />
                <Overview />
                <Contagion />
            </div>
        </div>
    )
}
export default Home;