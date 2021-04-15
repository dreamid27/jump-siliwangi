import styles from './AboutDetail.module.css'

function AboutDetail() {
  return (
    <div className={styles.aboutDetail}>
      <div className={styles.users}>
        <div>
          <img src="/user.png"></img>
        </div>
        <div>
          <h1>90+</h1>
          <p>Users</p>
        </div>
      </div>
      <div className={styles.locations}>
        <div>
          <img src="/location.png"></img>
        </div>
        <div>
          <h1>30+</h1>
          <p>Locatios</p>
        </div>
      </div>
      <div className={styles.servers}>
        <div>
          <img src="/server.png"></img>
        </div>
        <div>
          <h1>50+</h1>
          <p>Server</p>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;