import styles from './Map.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import map from '@public/map.png';
import prev from '@public/prev.png';
import line from '@public/line.png';
import next from '@public/next.png';
import up from '@public/up.png';
import down from '@public/down.png';
import search from '@public/search.png';
import zoomin from '@public/zoomin.png';
import zoomout from '@public/zoomout.png';
import uphorizontal from '@public/uphorizontal.png';
import downhorizontal from '@public/downhorizontal.png';
import linehorizontal2 from '@public/linehorizontal2.png';
import getCountries from './service';

function Map() {
    // const [countries, setCountries] = useState([]);
    const [page, setPage] = useState(1);

    // const Url = 'https://6056df7a055dbd0017e84408.mockapi.io/country?page='+page+'&limit=6';
    // const Url = 'https://6056df7a055dbd0017e84408.mockapi.io/country';
    const urlParams = '?page='+page+'&limit=6';

    const countries = getCountries(urlParams, page);
    const limit = 1;

    const handleIncrement = () => {
        // setCount(count+1);
        if ( (countries.length) < 6 || (countries.length) === 0 ) {
            console.log('Mentok bosku'); 
            return setPage(limit);
        }else{
            console.log('Lanjut');
            return setPage(page + 1 );
        }
    };
    
    const handleDecrement = () => {
        if ( page <= 1 ) {
            console.log('Mentok bosku'); 
            return setPage(page);
        }else{
            return setPage(page - 1 );
        }
    };
    
    // const getCountries = async () => {
    //     try{
    //         const res = await axios.get(Url+'?page='+count+'&limit=6');
    //         const limit = res.data.length;
    //         console.log(res.data);
    //         console.log(limit);
    //         // console.log(res.data.length);
    //         console.log(res.status);
    //         setCountries(res.data);
    //         return setCountries;
    //     } catch(err){
    //         console.log(err.message);
    //         console.log(err.status);
    //     }
    // }

    // useEffect(() => {
    //     getCountries();

    // }, [page]);

    return (
        <div className={styles.mapContainer}>
            <div className={styles.mapNavigatorWrap}>
                <div className={styles.mapNavigator}>
                    <div className={styles.mapNavigatorTop}>
                        <div><img src={zoomin}></img></div>
                        <div><img src={linehorizontal2}></img></div>
                        <div><img src={zoomout}></img></div>
                        <div><img src={linehorizontal2}></img></div>
                    </div>
                    <div className={styles.mapNavigatorBottom}>
                        <div><img src={uphorizontal}></img></div>
                        <div><img src={downhorizontal}></img></div>
                    </div>
                </div>
                <div className={styles.searchWrap}>
                    <img src={search}></img>
                </div>
            </div>
            <div className={styles.mapWrap}>
                <img src={map}></img>
            </div>
            <div className={styles.reportWrap}>
                <div className={styles.reportList}>
                    <div className={styles.headList}>
                        <div>
                            <h1>Live Reports</h1>
                            <h5>Page : {page}</h5>
                        </div>
                        <div className={styles.navList}>
                            <div onClick={handleDecrement} className={styles.navPrev}><img src={prev}></img></div>
                            <div className={styles.navLine}><img src={line}></img></div>
                            <div onClick={handleIncrement} className={styles.navNext}><img src={next}></img></div>
                        </div>
                    </div>
                    <div className={styles.countryWrap}>
                        {countries.map((country, idx) => (
                            <div key={idx} className={styles.cardList}>
                                <div className={styles.flagImg}><img src={country.flag}></img></div>
                                <h1>{country.name_country}</h1>
                                <h2>{country.total_case}</h2>
                                <div className={styles.statusImg}><img src={country.status ? up : down}></img></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;