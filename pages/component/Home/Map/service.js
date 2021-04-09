import axios from "axios";
import { useState, useEffect } from 'react'

const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/country';

const getCountries = (urlParams, page) => {
    const [countries, setCountries] = useState([]);

    useEffect(async() => {
        try{
            const res = await axios.get(urlApi+urlParams);
            // console.log(res.data);
            // console.log(res.status);
            setCountries(res.data);
        } catch(err){
            console.log(err.message);
            console.log(err.status);
        }
    }, [urlParams, page])
    return countries;
}

const getLimit = () => {
    const [limit, setLimit] = useState([]);

    useEffect(async() => {
        try{
            const res = await axios.get(urlApi);
            // console.log(res.data);
            // console.log(res.status);
            setLimit(res.data);
        } catch(err){
            console.log(err.message);
            console.log(err.status);
        }
    }, [])
    return limit;
}

export default { 
    getCountries, 
    getLimit 
};