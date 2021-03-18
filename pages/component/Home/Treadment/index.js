import styles from './Treadment.module.css';
import wearmask from '@public/wearmask.png';
import washhand from '@public/washhand.png';
import usernose from '@public//usernose.png';
import avoidcontacts from '@public/avoidcontacts.png';
import backgound from '@public/bgwedo1.png';
import backgound2 from '@public/bgwedo2.png';
import backgound3 from '@public/bgwedo3.png';

const treadmentList = [
    {
        no: '01',
        title: 'Wear Masks',
        desc: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
        img: wearmask
    },
    {
        no: '02',
        title: 'Wash Your Hands',
        desc: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals',
        img: washhand
    },
    {
        no: '03',
        title: 'Use Nose - Rag',
        desc: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
        img: usernose
    },
    {
        no: '04',
        title: 'Avoid Contacts',
        desc: 'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic',
        img: avoidcontacts
    }
]

function Treadment() {
    return(
        <div className={styles.treadmentContainer}>
            <div className={styles.backgound}><img src={backgound}></img></div>
            <div className={styles.backgound2}><img src={backgound2}></img></div>
            <div className={styles.backgound3}><img src={backgound3}></img></div>
            <h1>
                <span>
                Covid-19
                </span>
                What  should we do
            </h1>
            <p>
                Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused
            </p>

            {treadmentList.map((obj, idx) => 
                <div key={idx} className={styles.treadmentContent}>
                    <div className={styles.descContent}>
                        <div className={styles.numberContent}>
                            <div className={styles.no}>{obj.no}</div>
                        </div>
                        <div className={styles.descWrap}>
                            <div>
                                <div className={styles.title}>{obj.title}</div>
                                <div className={styles.desc}>{obj.desc}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.imgContent}>
                        <img src={obj.img}></img>
                    </div>
                </div>
            )} 
        </div>
    )
}

export default Treadment;