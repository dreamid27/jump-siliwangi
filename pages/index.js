import Head from 'next/head'
import NavBar from '../components/NavBar'
// import Footer from '../components/Footer'
// import Testi from '../components/Testi'
import Testi from "../components/Testimonials/index";
import Footer from "../components/Footer/index";
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LaslesVPN</title>
        <link rel="icon" href="/headLogo.png" />
      </Head>
      <NavBar />
      <div className={styles.wrap}>
        <div className={styles.about}>
          <div className={styles.aboutLeft}>
            <h1>
              Want anything to be easy with <span>LaslesVPN.</span>
            </h1>
            <p>
              Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.
            </p>
            <button className={styles.btn} type="button"> Get Started </button>
          </div>
          <div className={styles.aboutRight}>
            <img src="/Illustration1.png" alt="Illustration1"></img>
          </div>
        </div>
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
              <img src="/Server.png"></img>
            </div>
            <div>
              <h1>50+</h1>
              <p>Server</p>
            </div>
          </div>
        </div>
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
      </div>

      <main className={styles.wrapMain}>
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
        <h1>
          Huge Global Network of Fast VPN
        </h1>
        <p>
          See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.
        </p>
        <img className={styles.imgGlobal} src="/hugeglobal.svg"></img>
      </main>
      <section className={styles.wrapBottom}>
        <div className={styles.sponsored}>
          <div className={styles.netflix}></div>
          <div className={styles.reddit}></div>
          <div className={styles.amazon}></div>
          <div className={styles.discord}></div>
          <div className={styles.spotify}></div>
        </div>
        <Testi />
        {/* <div className={styles.testimonials}>
          <h1>
            Trusted by Thousands of Happy Customer
          </h1>
          <p>
            These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
          </p>
          <div className={styles.testiContent}>
            <div className={styles.testiContent1}>
              <div className={styles.testiContentHead}>
                <div className={styles.testiContentHeadAva}>
                  <img src="/ava1.png"></img>
                </div>
                <div className={styles.testiContentHeadName}>
                  <h2>Viezh Robert</h2>
                  <a>Warsaw, Poland</a>
                </div>
                <div className={styles.testiContentHeadStar}>
                  <h1>4.5</h1>
                  <div><img src="/star.png"></img></div>
                </div>
              </div>
              <div className={styles.testiContentText}>
                <h1>
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                </h1>
              </div>
            </div>
            <div className={styles.testiContent2}>
              <div className={styles.testiContentHead}>
                <div className={styles.testiContentHeadAva}>
                  <img src="/ava2.png"></img>
                </div>
                <div className={styles.testiContentHeadName}>
                  <h2>Yessica Christy</h2>
                  <a>Shanxi, China</a>
                </div>
                <div className={styles.testiContentHeadStar}>
                  <h1>4.5</h1>
                  <div><img src="/star.png"></img></div>
                </div>
              </div>
              <div className={styles.testiContentText}>
                <h1>
                  “I like it because I like to travel far and still can connect with high speed.”
                </h1>
              </div>
            </div>
            <div className={styles.testiContent3}>
              <div className={styles.testiContentHead}>
                <div className={styles.testiContentHeadAva}>
                  <img src="/ava3.png"></img>
                </div>
                <div className={styles.testiContentHeadName}>
                  <h2>Kim Young Jou</h2>
                  <a>Seoul, South Korea</a>
                </div>
                <div className={styles.testiContentHeadStar}>
                  <h1>4.5</h1>
                  <div><img src="/star.png"></img></div>
                </div>
              </div>
              <div className={styles.testiContentText}>
                <h1>
                “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.btnSlider}>
            <div className={styles.btnSliderLeft}>
              <div className={styles.btnSliderLeftDot}></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.btnSliderRight}>
              <div className={styles.btnSliderRightarLeft}></div>
              <div className={styles.btnSliderRightarRight}></div>
            </div>
          </div>
        </div> */}
        <div className={styles.subscribe}>
          <div className={styles.subscribeLeft}>
            <h1>
              Subscribe Now for Get Special Features!
            </h1>
            <p>
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <div className={styles.subscribeRight}>
            <button className={styles.btnSub} type="button">Subscribe Now</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
