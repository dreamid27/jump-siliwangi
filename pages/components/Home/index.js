import Head from 'next/head'
import styles from './Home.module.scss'
import Navbar from './NavbarMenu'
import MainContent from './MainContent'
import HighlightSection from './HighlightSection'
import InformationSection from './InformationSection'
// import ChosePlan from './ChosePlan'
// import CustomerSection from './CustomerSection'
// import TestimonialSection from './TestimonialSection'
// import FooterSection from './FooterSection'
import Icon from '@public/icon.svg'

const Home = () => {
    return <div>
        <div>
            <Head>
            <title>LaslesVPN</title>
            <link rel={Icon} alt="icon" />
            </Head>
            <Navbar />
        </div>
        <div>
            <MainContent />
            <HighlightSection />
            <InformationSection />
            {/* <div classname={styles.sectionMiddleContainer}>
                <div classname="wrapper">*/}
                    {/* <ChosePlan />
                    <CustomerSection />
                    <TestimonialSection /> */}
               {/*} </div>

            </div>
            <div classname={styles.sectionFooter}>
            <div classname="wrapper">*/}
                    {/* <FooterSection /> */}
{/*}                </div>
            </div> */}
        </div>
    </div>
}

export default Home;