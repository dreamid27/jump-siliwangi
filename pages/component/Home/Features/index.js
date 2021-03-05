import styles from './Features.module.css'

function Features() {
    return (
        <div className={styles.features}>
            <div className={styles.featuresLeft}>
                <img src="/Illustration2.png"></img>
            </div>
            <div className={styles.featuresRight}>
                <h1>
                    We Provide Many Features You Can Use
                </h1>
                <p>
                    You can explore the feature thah we provide with fun and heva their own functions each feature.
                </p>
                <div className={styles.featuresDetail}>
                    <div>
                        <img src="/group.png"></img>
                        <img src="/group.png"></img>
                        <img src="/group.png"></img>
                        <img src="/group.png"></img>
                    </div>
                    <div>
                        <p>Powerfull online protection.</p>
                        <p>Internet without borders.</p>
                        <p>Supercharged VPN.</p>
                        <p>No specific time limits.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;