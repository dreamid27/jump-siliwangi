import styles from './Pricing.module.css'

function Pricing() {
    return (
        <div className={styles.Wrap}>
            <h1>
                Choose Your Plan
            </h1>
            <p>
                Lets's choose the package that is best for you and explore it happily and cheerfully.
            </p>
            <div className={styles.pricing}>
                <div className={styles.pricingWrap}>
                    <img src="/Free.png"></img>
                    <h1>Free Plan</h1>
                    <div className={styles.pricingDetail}>
                        <div className={styles.pricingImg}>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                        </div>
                        <div className={styles.pricingP}>
                            <p>Unlimites Bandwitch</p>
                            <p>Encrypted Connection</p>
                            <p>No Traffic Logs</p>
                            <p>Works on All Devices</p>
                        </div>
                    </div>
                    <h2>Free</h2>
                    <button type="button">Select</button>
                </div>
                <div className={styles.pricingWrap}>
                    <img src="/Free.png"></img>
                    <h1>Standard Plan</h1>
                    <div className={styles.pricingDetail}>
                        <div className={styles.pricingImg}>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                        </div>
                        <div className={styles.pricingP}>
                            <p>Unlimites Bandwitch</p>
                            <p>Encrypted Connection</p>
                            <p>Yes Traffic Logs</p>
                            <p>Works on All Devices</p>
                            <p>Connect Anyware</p>
                        </div>
                    </div>
                    <h2><span>$9</span> / mo</h2>
                    <button type="button">Select</button>
                </div>
                <div className={styles.pricingWrap}>
                    <img src="/Free.png"></img>
                    <h1>Premium Plan</h1>
                    <div className={styles.pricingDetail}>
                        <div className={styles.pricingImg}>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                            <img src="/checklist.png"></img>
                        </div>
                        <div className={styles.pricingP}>
                            <p>Unlimites Bandwitch</p>
                            <p>Encrypted Connection</p>
                            <p>Yes Traffic Logs</p>
                            <p>Works on All Devices</p>
                            <p>Connect Anyware</p>
                            <p>Get New Features</p>
                        </div>
                    </div>
                    <h2><span>$12</span> / mo</h2>
                    <button type="button">Select</button>
                </div>
            </div>
        </div>
    );
}

export default Pricing;