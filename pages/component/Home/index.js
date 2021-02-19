
import styles from './Home.module.css'
import Menu from './Menu';
import MainContent from './MainContent';
import HighlightInfo from './HighlightInfo';
import InformationList from './InformationList';
import ChoosePlan from './ChoosePlan';
import CustomerSection from './CustomerSection';
import TestimonialSection from './TestimonialSection';
import FooterSection from './FooterSection';


const Home = () => {
    return <div>
        <div>
            <Menu />
        </div>
        <div>
            <MainContent />
            <HighlightInfo />
            <InformationList />
            <div className={styles.sectionMiddleContainer}>
                <div className="wrapper">
                    <ChoosePlan />
                    <CustomerSection />
                    <TestimonialSection />
                </div>
              
            </div>
            <div className={styles.sectionFooter}>
                <div className="wrapper">
                    <FooterSection />
                </div>
            </div>
           
        </div>
    </div>
}

export default Home;