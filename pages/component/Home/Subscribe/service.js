import axios from "axios";
import { useState, useEffect } from 'react'

const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/help_center'

const [emailHelp, setEmailHelp] = useState(
    { email: '' }
);

const handleChange = (event) => {
    setEmailHelp(
        { ...emailHelp, [event.target.name]: event.target.value }
    )
}

const handleSubmit = (event) => {
    event.preventDefault();
    try {
        const res = axios.post(urlApi, emailHelp);
        console.log(res);
        alert("Sukses Post Data");
    }
    catch (err) {
        console.log(err.message);
    }
}

export default {
    handleChange,
    handleSubmit
};