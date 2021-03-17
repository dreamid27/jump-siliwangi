import styles from './Subscribe.module.css'

function Subscribe() {
    return(
        <div className={styles.subscribeContainer}>
            <h1>
                Have Question in mind? Let us help you
            </h1>
            <div className={styles.formSubscribe}>
                <a>snmonydemo@gmail.com</a>
                <button className={styles.btnSubscribe}>Send</button>
            </div>
        </div>
    )
}

export default Subscribe;