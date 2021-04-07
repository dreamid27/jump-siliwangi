import styles from './Subscribe.module.css';
import axios from "axios";
import { useState, useEffect } from 'react';


function Subscribe() {

    const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/help_center'

    const [emailHelp, setEmailHelp] = useState(
        { email: '' }
    );

    const handleChange = (event) => {
        setEmailHelp(
            {...emailHelp, [event.target.name]: event.target.value}
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try{
            const res = axios.post(urlApi, emailHelp);
            console.log(res);
            alert("Sukses Post Data");
        }
        catch(err){
            console.log(err.message);
        }
    }

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
                    value={emailHelp.email}
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