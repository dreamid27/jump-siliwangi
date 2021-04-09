import Link from "next/link";
import styles from "./Highlight.module.scss";

function Highlight() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.cardWrapper}>
                    <div className={styles.column}>
                        <div className={styles.cardImage}>
                            <img
                                src="/users.svg"
                                className={styles.imageItem}
                            />
                        </div>
                        <div className={styles.dataItem}>
                            <h3>90+</h3>
                            <p>Users</p>
                        </div>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.column}>
                        <div className={styles.imageItem}>
                            <img
                                src="/locations.svg"
                                className={styles.imageItem}
                            />
                        </div>
                        <div className={styles.dataItem}>
                            <h3>30+</h3>
                            <p>Locations</p>
                        </div>
                    </div>
                    <div className={styles.line} />
                    <div className={styles.column}>
                        <div className={styles.imageItem}>
                            <img
                                src="/servers.svg"
                                className={styles.imageItem}
                            />
                        </div>
                        <div className={styles.dataItem}>
                            <h3>50+</h3>
                            <p>Servers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlight;
