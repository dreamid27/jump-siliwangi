import userIcon from '@public/user.png';
import locationIcon from '@public/location.png';
import serverIcon from '@public/server.png';
import styles from './Highlight.module.css';

const highlightList = [
    {
        iconUrl: userIcon,
        total: '90+',
        label: 'Users'
    },
    {
        iconUrl: locationIcon,
        total: '30+',
        label: 'Locations'
    },
    {
        iconUrl: serverIcon,
        total: '50+',
        label: 'Servers'
    }
]

const HighlightInfo = () => {
    return <div className={styles.highlightContainer}>
        {highlightList.map(obj => <div className={styles.itemContainer}>
            <div>
                <img src={obj.iconUrl} alt={obj.label} />
            </div>
            <div data-description>
                <div data-total>{obj.total}</div>
                <div>{obj.label}</div>
            </div>
        </div>)}
    </div>
}

export default HighlightInfo;