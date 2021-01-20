import Link from 'next/link';

function Home() {
    return (
      <div className = "container">
        <nav>
          <Link href="/">
            <a className = "logo"><img src = "/Logo.svg" alt="LasslesVPN"></img></a></Link>
              <ul className ="nav-links">
                <li><Link href = "/"><a>About</a></Link></li>
                <li><Link href = "/"><a>Features</a></Link></li>
                <li><Link href = "/"><a>Pricing</a></Link></li>
                <li><Link href = "/"><a>Testimonials</a></Link></li>
                <li><Link href = "/"><a>Help</a></Link></li>
              </ul>
              <div className = "nav-links-cta">
                <Link href = "/"><a className = "link-sm">Sign In</a></Link>
                <button className = "cta-red">Sign Up</button>
              </div>
        </nav>
    
        <section className = "hero">
          <div className = "column-text-heading">
            <p className = "hero-heading">Want anything to be <br></br> easy with <strong >LaslesVPN.</strong></p>
            <p className = "text-p">
            Provide a network for all your needs with ease and fun using <strong>LaslesVPN</strong> <br></br>discover interesting features from us.
            </p>
            <button className = "btn-secondary">Get Started</button>
          </div>
          <div>
            <img className = "illustration-hero" src = "/illust.png"></img>
          </div>
        </section>
      </div>   
    )
  }

export default Home;