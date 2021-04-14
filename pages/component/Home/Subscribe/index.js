import styles from './Subscribe.module.css';
// import useSubscribe from './service';
import useSubscribe from 'service/postSubscribe';


function Subscribe() {

    const { handleSubmit, handleChange, emailHelp } = useSubscribe();

    return(
        <div className={styles.subscribeContainer}>
            <h1>
                Have Question in mind? Let us help you
            </h1>
            <form onSubmit={handleSubmit} className={styles.formSubscribeWrap}>
                <input
                    className={styles.formSubscribe} 
                    type="text" 
                    name="email"
                    value={emailHelp}
                    onChange={handleChange}
                    required
                    placeholder="snmonydemo@gmail.com"
                ></input>
                <button type='submit' className={styles.btnSubscribe}>Send</button>
            </form>
        </div>
    )
}

export default Subscribe;