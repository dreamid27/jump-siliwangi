import styles from './Subscribe.module.css'

function Subscribe() {
    return(
        <div className={styles.subscribeContainer}>
            <h1>
                Have Question in mind? Let us help you
            </h1>
            <div className={styles.formSubscribeWrap}>
                <input className={styles.formSubscribe} type="text" id="fname" name="firstname" placeholder="snmonydemo@gmail.com"></input>
                <button className={styles.btnSubscribe}>Send</button>
            </div>
            {/* <div className={styles.formSubscribe}>
                <input className={styles.inputSubscribe} type="text" id="fname" name="firstname" placeholder="snmonydemo@gmail.com"></input>
                <a>snmonydemo@gmail.com</a>
                <button className={styles.btnSubscribe}>Send</button>
            </div> */}
        </div>
    )
}

export default Subscribe;