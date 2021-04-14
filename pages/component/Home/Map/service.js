import axios from "axios";
import { useState, useEffect } from 'react'
import styles from './Map.module.css';

const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/country';

const getCountries = (urlParams, page) => {
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

const getLimit = () => {
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

export default { 
    getCountries, 
    getLimit 
};

// const useCountries = () => {
//     const urlApi = 'https://6056df7a055dbd0017e84408.mockapi.io/country';
//     const getCountries = (urlParams, page) => {
//         const [countries, setCountries] = useState([]);
//         const [isLoading, setIsLoading] = useState(false);
    
//         useEffect(async() => {
//             try{
//                 setIsLoading(true);
//                 const res = await axios.get(urlApi+urlParams);
//                 console.log(res.data);
//                 // console.log(res.status);
//                 setCountries(res.data);
//             } catch(err){
//                 console.log(err.message);
//                 console.log(err.status);
//             } finally {
//                 setIsLoading(false);
//             }
//         }, [urlParams, page])
//         return {countries, isLoading};
//     }
    
//     const getLimit = () => {
//         const [limit, setLimit] = useState([]);
//         const [isLoading, setIsLoading] = useState(false);
    
//         useEffect(async() => {
//             try{
//                 setIsLoading(true);
//                 const res = await axios.get(urlApi);
//                 console.log(res.data);
//                 // console.log(res.status);
//                 setLimit(res.data);
//             } catch(err){
//                 console.log(err.message);
//                 console.log(err.status);
//             } finally {
//                 setIsLoading(false);
//             }
//         }, [])
//         return limit;
//     }

//     return {
//         getCountries,
//         getLimit
//     }
// }



// export default useCountries;