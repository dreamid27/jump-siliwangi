import styles from './Contagion.module.css'

const contagionList = [
    {
        avatar: '/ava.png',
        label: 'Air Transmission',
        desc: 'Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify',
        // highlight: trus
    },
    {
        avatar: '/hand.png',
        label: 'Human Contacts',
        desc: 'Washing your hands is one of thesimplest ways you can protect',
        // highlight: false
    },
    {
        avatar: '/cup.png',
        label: 'Containted Objects',
        desc: 'Use the tissue while sneezing,In this way, you can protect your droplets.',
        // highlight: false
    }
]

function Contagion() {
    return(
        <div className={styles.contagionContainer}>
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
            </div>
            <div className={styles.wrapContagion}>
                {contagionList.map(obj =>
                    <div className={styles.cardContagion}>
                        <div className={styles.avaContagion}>
                            <img src={obj.avatar}></img>
                        </div>
                        <div className={styles.descContagion}>
                            <div className={styles.label}>{obj.label}</div>
                            <div className={styles.desc}>{obj.desc}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Contagion;