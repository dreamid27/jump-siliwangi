import styles from './Map.module.css';
import axios from 'axios';
import { Component, useState } from 'react'
import map from '@public/map.png';
import prev from '@public/prev.png';
import line from '@public/line.png';
import next from '@public/next.png';
import up from '@public/up.png';
import down from '@public/down.png';
import usa from '@public/usa.png';
import italy from '@public/italy.png';
import china from '@public/china.png';
import spain from '@public/spain.png';
import germany from '@public/germany.png';
import iran from '@public/iran.png';
import search from '@public/search.png';
import zoomin from '@public/zoomin.png';
import zoomout from '@public/zoomout.png';
import uphorizontal from '@public/uphorizontal.png';
import downhorizontal from '@public/downhorizontal.png';
import linehorizontal2 from '@public/linehorizontal2.png';


// const liveReportList = [
//     {
//         flag: usa,
//         name: 'USA',
//         total: '100,392',
//         status: up
//     },
//     {
//         flag: italy,
//         name: 'Italy',
//         total: '86,498',
//         status: up
//     },
//     {
//         flag: china,
//         name: 'China',
//         total: '81,340',
//         status: down
//     },
//     {
//         flag: spain,
//         name: 'Spain',
//         total: '64,059',
//         status: up
//     },
//     {
//         flag: germany,
//         name: 'Germany',
//         total: '50,871',
//         status: up
//     },
//     {
//         flag: iran,
//         name: 'Iran',
//         total: '32,332',
//         status: up
//     }
// ]

// function Map() {
//     return(
//         <div className={styles.mapContainer}>
//             <div className={styles.mapNavigatorWrap}>
//                 <div className={styles.mapNavigator}>
//                     <div className={styles.mapNavigatorTop}>
//                         <div><img src={zoomin}></img></div>
//                         <div><img src={linehorizontal2}></img></div>
//                         <div><img src={zoomout}></img></div>
//                         <div><img src={linehorizontal2}></img></div>
//                     </div>
//                     <div className={styles.mapNavigatorBottom}>
//                         <div><img src={uphorizontal}></img></div>
//                         <div><img src={downhorizontal}></img></div>
//                     </div>  
//                 </div>
//                 <div className={styles.searchWrap}>
//                     <img src={search}></img>
//                 </div>
//             </div>
//             <div className={styles.mapWrap}>
//                 <img src={map}></img>
//             </div>
//             <div className={styles.reportWrap}>
//                 <div className={styles.reportList}>
//                     <div className={styles.headList}>
//                         <div>
//                             <h1>Live Reports</h1>
//                         </div>
//                         <div className={styles.navList}>
//                             <div><img src={prev}></img></div>
//                             <div><img src={line}></img></div>
//                             <div><img src={next}></img></div>  
//                         </div>
//                     </div>
//                     {liveReportList.map((obj, idx) => 
//                         <div key={idx} className={styles.cardList}>    
//                             <div className={styles.flagImg}><img src={obj.flag}></img></div>
//                             <h1>{obj.name}</h1>
//                             <h2>{obj.total}</h2>
//                             <div className={styles.statusImg}><img src={obj.status}></img></div>
//                         </div> 
//                     )}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Map;

class Map extends Component {
    state = {
        countries: []
    }

    componentDidMount(){
        axios.get('https://6056df7a055dbd0017e84408.mockapi.io/country')
            .then(res => {
                const countries = res.data;
                this.setState({ countries });
            })
    }

    render(){
        return(
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
                                <div className={styles.navPrev}><img src={prev}></img></div>
                                <div className={styles.navLine}><img src={line}></img></div>
                                <div className={styles.navNext}><img src={next}></img></div>  
                            </div>
                        </div>
                        <div className={styles.countryWrap}>
                            {this.state.countries.map((country, idx) =>
                                <div key={idx} className={styles.cardList}>    
                                    <div className={styles.flagImg}><img src={country.flag}></img></div>
                                    <h1>{country.name_country}</h1>
                                    <h2>{country.total_case}</h2>
                                    <div className={styles.statusImg}><img src={country.status ? up : down}></img></div>
                                </div> 
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Map;