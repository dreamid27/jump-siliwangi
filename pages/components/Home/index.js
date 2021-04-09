import Head from 'next/head'
import styles from './Home.module.scss'
import Navbar from './NavbarMenu'
import MainContent from './MainContent'
import HighlightSection from './HighlightSection'
import InformationSection from './InformationSection'
import ChosePlan from './ChosePlan'
import CustomerSection from './CustomerSection'
import TestimonialSection from './TestimonialSection'
import FooterSection from './FooterSection'
// import Icon from '@public/icon.svg'

const Home = () => {
    return <div>
        <div>
            <Head>
            <title>LaslesVPN</title>
            <link rel="icon" href="/icon.svg" alt="icon" />
            </Head>
            <Navbar />
        </div>
        <div>
            <MainContent />
            <HighlightSection />
            <InformationSection />
                    <ChosePlan />
                    <CustomerSection />
                    <TestimonialSection />
                    <FooterSection />
        </div>
    </div>
}

export default Home;