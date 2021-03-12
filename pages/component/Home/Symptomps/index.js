import styles from './Symtomps.module.css'

function Symtomps() {
    return(
        <div className={styles.symtompsContainer}>
            <div>
                <h1>
                    <span>
                    Covid-19
                    </span>
                    Symptomps
                </h1>
                <p>
                Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused a recent outbreak of respiratory 
                </p>
            </div>
            <div className={styles.imgWrap}>
                <img src="/symptomps.png"></img>
            </div>
        </div>
    )
}

export default Symtomps;