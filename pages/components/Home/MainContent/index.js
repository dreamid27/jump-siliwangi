import Link from 'next/link'
import styles from './Navbar.module.scss'

function Navbar() {
    return (
        <section className="hero">
        <div className="container">
           <div className="text-wrapper">
              <h1 className="text-title">Want anything to be easy with <b>LaslesVPN</b>.</h1>
              <p className="description">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.</p>

              <Link href="/contact"><a className="cta">Get Started</a></Link>
           </div>

           <div className="image-wrapper">
              <img src="/Illustration-1.png" />
           </div>
        </div>
     </section>
    );
}

export default Navbar; 