import styles from './Choose.module.css';
import packageImage from '@public/package.png';
import {Fragment} from 'react';

const packageList = [
    {
        packageType: 'Free Plan',
        descriptionList: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices'
        ],
        price: '<b>Free</b>',
        highlight: false
    },
    {
        packageType: 'Standar Plan',
        descriptionList: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'Yes Traffic Logs',
            'Works on All Devices',
            'Connect Anywwhere'
        ],
        price: '<b>$9</b> / mo',
        highlight: false
    },
    {
        packageType: 'Premium Plan',
        descriptionList: [
            'Unlimited Bandwitch',
            'Encrypted Connection',
            'No Traffic Logs',
            'Works on All Devices',
            'Connect Anywwhere',
            'Get New Features'
        ],
        price: '<b>$12</b> / mo',
        highlight: true
    }
]

const ChoosePlan = ()  => <div  className={styles.chooseContainer}>
    <h3>Choose Your Plan</h3>
    <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
    <div className={styles.itemContainer}>
        {packageList.map(obj => <div className={styles.packageContainer} data-highlight={obj.highlight}>
            <div data-desc>
                <img src={packageImage} alt="package" />
                <h4>{obj.packageType}</h4>
                <ul>
                    {obj.descriptionList.map(desc => <li>{desc}</li> )}
                </ul>
            </div>
            <div className={styles.actionContainer}>
                <div className={styles.priceDesc} dangerouslySetInnerHTML={{__html: obj.price}}></div>
                <a className={styles.actionButton}>Select</a>
            </div>
        </div>)}
    </div>
</div>

export default ChoosePlan;