import styles from './Contagion.module.css';
import avatar from '@public/ava.png';
import hand from '@public/hand.png';
import cup from '@public/cup.png';
import bg from '@public/bgcontagion.png';

const contagionList = [
    {
        avatar: avatar,
        label: 'Air Transmission',
        desc: 'Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify',
        highlight: true
    },
    {
        avatar: hand,
        label: 'Human Contacts',
        desc: 'Washing your hands is one of thesimplest ways you can protect',
        highlight: false
    },
    {
        avatar: cup,
        label: 'Containted Objects',
        desc: 'Use the tissue while sneezing,In this way, you can protect your droplets.',
        highlight: false
    }
]

function Contagion() {
    return(
        <div className={styles.contagionContainer} id="Contagion">
            <div>
                <h1>
                    <span>
                        Covid-19
                    </span>
                    Contagion
                </h1>
                <p>
                    Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type
                </p>
                <div><img src={bg} className={styles.bgThird}></img></div>
            </div>
            <div className={styles.wrapContagion}>
                {contagionList.map((obj, idx) =>
                    <div key={idx} className={styles.cardContagion} data-highlight={obj.highlight}>
                        <div className={styles.avaContagion}>
                            <img src={obj.avatar}></img>
                        </div>
                        <div className={styles.descContagion}>
                            <div className={styles.label}>{obj.label}</div>
                            <div className={styles.desc}>{obj.desc}</div>
                        </div>
                        <div className={styles.indicator} data-highlight={obj.highlight}></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contagion;