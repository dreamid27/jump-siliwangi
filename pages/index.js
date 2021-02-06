import Head from 'next/head';
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
export default function Home() {

  const [halo] = useState('LasslesVPN')

    return (
      <div className = {styles.container}>
        <Head>
          <title>{halo}</title>
          <link rel = "icon" href = "icon.png"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <nav className = {styles.nav}>
          <Link href="/">
            <a className = {styles.logo}>
              <img src = "/Logo.svg" alt="LasslesVPN"></img>
            </a>
          </Link>
              <ul className = {styles['nav-links']}>
                <li><Link href = "/"><a>About</a></Link></li>
                <li><Link href = "/"><a>Features</a></Link></li>
                <li><Link href = "/"><a>Pricing</a></Link></li>
                <li><Link href = "/"><a>Testimonials</a></Link></li>
                <li><Link href = "/"><a>Help</a></Link></li>
              </ul>
              <div className = {styles['nav-links-cta']}>
                <Link href = "/"><a className = {styles['link-sm']}>Sign In</a></Link>
                <button className = {styles['cta-red']}>Sign Up</button>
              </div>
        </nav>

        <section className = {styles.hero}>
          <div className = {styles['column-text-heading']}>
            <h1 className = {styles['hero-heading']}>Want anything to be <br></br> easy with <span >LaslesVPN.</span></h1>
            <p className = {styles['text-p']}>
            Provide a network for all your needs with ease and fun using <strong>LaslesVPN</strong> <br></br>discover interesting features from us.
            </p>
            <button className = {styles['btn-secondary']} >Get Started</button>
          </div>
          <div>
            <img className = {styles['illustration-hero']} src = "/illust.png"></img>
          </div>
        </section>
        
        <section className = {styles.features}>
          <div className = {styles['row-column']}>
            <div className = {styles.column}>
              <img src="/user.png"></img>
              <div className = {styles['text-col']}>
                <h1>90+</h1>
                <p>Users</p>
              </div>
            </div>
            <div className = {styles.columnMid}>
              <img src="/location.png"></img>
              <div className = {styles['text-col']}>
                <h1>30+</h1>
                <p>Locations</p>
              </div>
            </div>
            <div className = {styles.column}>
              <img src="/server.png"></img>
              <div className = {styles['text-col']}>
                <h1>50+</h1>
                <p>Servers</p>
              </div>
            </div>
          </div>
        </section>

        <section className = {styles.wrapper}>
          <div className = {styles['img-wrapper']}>
            <img src = "/person.png"></img>
          </div>
          <div className = {styles['text-wrapper']}>
            <h1>We Provide Many<br></br>
              Features You Can Use</h1>
              <p className = {styles['text-info']}>You can explore the features that we provide with fun<br></br>
                and have their own functions each feature.</p>
              <div className = {styles['wrapper-feature']}>
                <p>
                  <img src = "/ceklis.png"/>Powerfull online protection.
                </p>
                <p>
                  <img src = "/ceklis.png"/>Internet without borders.
                </p>
                <p>
                  <img src = "/ceklis.png"/>Supercharged VPN.
                </p>
                <p>
                  <img src = "/ceklis.png"/>No specific time limits.
                </p>
              </div>
          </div>
        </section>

        <div className = {styles['bg-graydark']}>
          <section className = {styles.pricing}>
            <div className = {styles['pricing-heading']}>
              <h1>Choose Your Plan</h1>
              <p>Let's choose the package that is best for you and explore it happily and <br></br>cheerfully.</p>
            </div>
            <div className= {styles['row-pricing-card']}>
              <div className = {styles['pricing-card']}>
                <div className = {styles['pricing-img']}>
                  <img src = "/price.png"></img>
                  <h3>Free Plan</h3>
                </div>
                <div className = {styles['pricing-description']}>
                  <p>
                      <img src = "jam_check.png"/>Unlimited Bandwitch
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Encrypted Connection
                  </p>
                  <p>
                      <img src = "jam_check.png"/>No Traffic Logs
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Works on All Devices
                  </p>
                </div>
                <div className = {styles['pricing-button']}>
                  <h3>Free</h3>
                  <button className= {styles['btn-pricing']}>Select</button>
                </div>
              </div>
              <div className = {styles['pricing-card']}>
                <div className = {styles['pricing-img']}>
                  <img src = "/price.png"></img>
                  <h3>Standard Plan</h3>
                </div>
                <div className = {styles['pricing-description']}>
                  <p>
                      <img src = "jam_check.png"/>Unlimited Bandwitch
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Encrypted Connection
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Yes Traffic Logs
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Works on All Devices
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Connect Anywhere
                  </p>
                </div>
                <div className = {styles['pricing-button']}>
                  <h3>$9 <span>/ mo</span></h3>
                  <button className= {styles['btn-pricing']}>Select</button>
                </div>
              </div>
              <div className = {styles['pricing-card']}>
                <div className = {styles['pricing-img']}>
                  <img src = "/price.png"></img>
                  <h3>Premium Plan</h3>
                </div>
                <div className = {styles['pricing-description']}>
                  <p>
                      <img src = "jam_check.png"/>Unlimited Bandwitch
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Encrypted Connection
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Yes Traffic Logs
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Works on All Devices
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Connect Anywhere
                  </p>
                  <p>
                      <img src = "jam_check.png"/>Get New Features
                  </p>
                </div>
                <div className = {styles['pricing-button']}>
                  <h3>$12 <span>/ mo</span></h3>
                  <button className= {styles['btn-pricing']}>Select</button>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.partners}>
            <div className={styles['partners-heading']}>
              <h1>Huge Global Network<br></br>of Fast VPN</h1>
              <p>See <span>LaslesVPN</span> everywhere to make it easier for you when you move<br></br>locations.</p>
            </div>
            <div className= {styles['partners-img']}>
              <img src="/global.png" alt=""/>
            </div>
            <div className={styles['partners-company']}>
              <img src="netflix.png" alt=""/>
              <img src="reddit.png" alt=""/>
              <img src="amazon.png" alt=""/>
              <img src="discord.png" alt=""/>
              <img src="spotify.png" alt=""/>
            </div>
          </section>

          <section className={styles.testimonial}>
            <div className={styles['testi-heading']}>
              <h1>Trusted by Thousands of<br></br>Happy Customer</h1>
              <p>These are the stories of our customers who have joined us with great<br></br>pleasure when using this crazy feature.</p>
            </div>
            <div className={styles['testi-row-card']}>
              <div className={styles['testi-card']}>
                <div className={styles['testi-card-heading']}>
                  <img classname = "user" src="/pp1.png" alt=""/>
                  <div className={styles['testi-name']}>
                    <h1>Viezh Robert
                    <span><br></br>Warsaw, Poland</span></h1>
                  </div>
                  <div className={styles.rating}>
                  <p>4.5</p>
                  <img src="/star.png" alt=""/>
                  </div>
                </div>
                <div className={styles['testi-card-body']}>
                “Wow... I am very happy to use this VPN, it<br></br>
                turned out to be more than my expectations<br></br>
                and so far there have been no problems.<br></br>
                LaslesVPN always the best”.
                </div>
              </div>
              <div className={styles['testi-card']}>
                <div className={styles['testi-card-heading']}>
                  <img className = "user" src="/pp1.png" alt=""/>
                  <div className={styles['testi-name']}>
                    <h1>Viezh Robert
                    <span><br></br>Warsaw, Poland</span></h1>
                  </div>
                  <div className={styles.rating}>
                  <p>4.5</p>
                  <img src="/star.png" alt=""/>
                  </div>
                </div>
                <div className={styles['testi-card-body']}>
                “Wow... I am very happy to use this VPN, it<br></br>
                turned out to be more than my expectations<br></br>
                and so far there have been no problems.<br></br>
                LaslesVPN always the best”.
                </div>
              </div>
              <div className={styles['testi-card']}>
                <div className={styles['testi-card-heading']}>
                  <img className = "user" src="/pp1.png" alt=""/>
                  <div className={styles['testi-name']}>
                    <h1>Viezh Robert
                    <span><br></br>Warsaw, Poland</span></h1>
                  </div>
                  <div className={styles.rating}>
                  <p>4.5</p>
                  <img src="/star.png" alt=""/>
                  </div>
                </div>
                <div className={styles['testi-card-body']}>
                “Wow... I am very happy to use this VPN, it<br></br>
                turned out to be more than my expectations<br></br>
                and so far there have been no problems.<br></br>
                LaslesVPN always the best”.
                </div>
              </div>
            </div>
            <div className={styles.tab}>
              <div className={styles['testi-tab']}>
                <span className={styles.active}></span>
                <span></span>
                <span className={styles.dot}></span>
                <span></span>
              </div>
              <div className={styles['testi-tab-arrow-btn']}>
                <span></span>
                <span className={styles.active}></span>
              </div>
            </div>
          </section>
        </div>

          <section className={styles['bg-footer']}>
            <footer className={styles.footer}>
              <div className={styles['footer-heading']}>
                <Link href="/">
                  <a>
                    <img src = "/Logo.svg" alt="LasslesVPN"></img>
                  </a>
                </Link>
                <h2>
                  <span>LaslesVPN</span> is a private virtual network that<br></br>
                  has unique features and has high security.
                </h2>
                <ul className = {styles['social-media']}>
                  <li><Link href = "/"><a className={styles.fb}></a></Link></li>
                  <li><Link href = "/"><a className={styles.twt}></a></Link></li>
                  <li><Link href = "/"><a className={styles.ig}></a></Link></li>
                </ul>
                <h3>
                  &copy;2020Lasles<span>VPN</span>
                </h3>
              </div>
              <div className = {styles['footer-body']}>
                <div className={styles.left}>
                  <h3>Product</h3>
                  <ul className = {styles.product}>
                    <li><Link href = "/"><a>Download</a></Link></li>
                    <li><Link href = "/"><a>Pricing</a></Link></li>
                    <li><Link href = "/"><a>Locations</a></Link></li>
                    <li><Link href = "/"><a>Server</a></Link></li>
                    <li><Link href = "/"><a>Countries</a></Link></li>
                    <li><Link href = "/"><a>Blog</a></Link></li>
                  </ul>
                </div>
                <div className={styles.mid}>
                  <h3>Engage</h3>
                  <ul className = {styles.engage}>
                    <li><Link href = "/"><a>LaslesVPN</a></Link></li>
                    <li><Link href = "/"><a>FAQ</a></Link></li>
                    <li><Link href = "/"><a>Tutorials</a></Link></li>
                    <li><Link href = "/"><a>About us</a></Link></li>
                    <li><Link href = "/"><a>Privacy Policy</a></Link></li>
                    <li><Link href = "/"><a>Terms of Service</a></Link></li>
                  </ul>
                </div>
                <div className={styles.right}>
                  <h3>Earn Money</h3>
                  <ul className = {styles.earn}>
                    <li><Link href = "/"><a>Affiliate</a></Link></li>
                    <li><Link href = "/"><a>Become Partner</a></Link></li>
                  </ul>
                </div>
              </div>
            </footer>
          </section>

          <section className={styles.subscribe}>
            <div className = {styles['subs-heading']}>
              <h1>Subscribe Now for<br></br>
                Get Special Features!</h1>
                <p>Let's subscribe with us and find the fun.</p>
            </div>
            <div className={styles['subs-btn']}>
              <button>Subscribe Now</button>
            </div>
          </section>
      </div>   
    )
}