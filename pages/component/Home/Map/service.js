import axios from "axios";
import { useState, useEffect } from 'react'

const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/country';

const useGetCountries = (urlParams, page) => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async() => {
        try{
            setIsLoading(true);
            const res = await axios.get(urlApi+urlParams);
            console.log(res.data);
            // console.log(res.status);
            setCountries(res.data);
        } catch(err){
            console.log(err.message);
            console.log(err.status);
        } finally {
            setIsLoading(false);
        }
    }, [urlParams, page])
    return {countries, isLoading};
}

const useGetLimit = () => {
    const [limit, setLimit] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async() => {
        try{
            setIsLoading(true);
            const res = await axios.get(urlApi);
            console.log(res.data);
            // console.log(res.status);
            setLimit(res.data);
        } catch(err){
            console.log(err.message);
            console.log(err.status);
        } finally {
            setIsLoading(false);
        }
    }, [])
    return limit;
}

export { 
    useGetCountries, 
    useGetLimit 
}