import Link from 'next/link';

function Home() {
    return (
      <div className = "container">

        {/*Navbar*/}
        
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
        
        {/*Hero*/}

        <section className = "hero">
          <div className = "column-text-heading">
            <h1 className = "hero-heading">Want anything to be <br></br> easy with <span >LaslesVPN.</span></h1>
            <p className = "text-p">
            Provide a network for all your needs with ease and fun using <strong>LaslesVPN</strong> <br></br>discover interesting features from us.
            </p>
            <button className = "btn-secondary">Get Started</button>
          </div>
          <div>
            <img className = "illustration-hero" src = "/illust.png"></img>
          </div>
        </section>
        
        {/*Features*/}

        <section className = "features">
          <div className = "row-column">
            <div className = "column">
              <img src="/user.png"></img>
              <div className = "text-col">
                <h1>90+</h1>
                <p>Users</p>
              </div>
              <img src = "/gap.png"></img>
            </div>
            <div className = "column">
              <img src="/location.png"></img>
              <div className = "text-col">
                <h1>30+</h1>
                <p>Locations</p>
              </div>
              <img src = "/gap.png"></img>
            </div>
            <div className = "column">
              <img src="/server.png"></img>
              <div className = "text-col">
                <h1>50+</h1>
                <p>Servers</p>
              </div>
            </div>
          </div>

        </section>
      </div>   
    )
  }

export default Home;