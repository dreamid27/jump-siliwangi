import Map from '@public/mapping.svg';
import styles from './style.module.css';
import netflix from '@public/Netflix.png';
import reddit from '@public/Reddit.png';
import amazon from '@public/Amazon.png';
import discord from '@public/Discord.png';
import spotify from '@public/spotify.png';

const customerList = [
    netflix,
    reddit,
    amazon,
    discord,
    spotify,
]

const CustomerSection = () => <div className={styles.customerContainer}>
    <div className={styles.headerCont}>
    <h3>Huge Global Network of Fast VPN</h3>
    <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
    </div>
    <img src={Map} />
    <div className={styles.customerList}>
        {customerList.map(obj => <img src={obj} /> )}
    </div>
</div>

export default CustomerSection;