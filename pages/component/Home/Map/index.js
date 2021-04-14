import styles from './Map.module.css';
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
import {useGetCountries, useGetLimit } from './service';

function Map() {
    const [page, setPage] = useState(1);

    const urlParams = '?page=' + page + '&limit=6';

    const { countries, isLoading } = useGetCountries(urlParams, page);
    const limit = useGetLimit();

    const handleNext = () => {
        //single line 'if' statement
        if (isLoading) return
        (countries.length === (limit.length) % 6) ? setPage(page): setPage(page + 1);
    };

    const handlePrev = () => {
        (page <= 1) ? setPage(page) : setPage(page - 1);
    };

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
                        </div>
                        <div className={styles.navList}>
                            <div onClick={handlePrev} className={styles.navPrev}><img src={prev}></img></div>
                            <div className={styles.navLine}><img src={line}></img></div>
                            <div onClick={handleNext} className={styles.navNext}><img src={next}></img></div>
                        </div>
                    </div>
                    {isLoading ? <div className={styles.loader}></div> :
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
                    }
                </div>
            </div>
        </div>
    );
}

export default Map;