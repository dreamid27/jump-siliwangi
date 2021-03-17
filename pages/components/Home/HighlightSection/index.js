import Link from 'next/link'
import styles from './Highlight.module.scss'

function Highlight() {
    return (
        <section className="hero">
        <div className="container">
           <div className="card-wrapper">
              
              <div className="column">
                 <div className="card-image">
                    <img src="/users.svg" className="image-item" />
                 </div>
                 <div className="data-item">
                    <p className="name-item">90+</p>
                    <p className="category-item">Users</p>
                 </div>
              </div>
              <div className="line"></div>
              <div className="column">
                 <div className="image-item">
                    <img src="/locations.svg" className="image-item" />
                 </div>
                 <div className="data-item">
                    <p className="name-item">30+</p>
                    <p className="category-item">Locations</p>
                 </div>
              </div>
              <div className="line"></div>
              <div className="column">
                 <div className="image-item">
                    <img src="/servers.svg" className="image-item" />
                 </div>
                 <div className="data-item">
                    <p className="name-item">50+</p>
                    <p className="category-item">Servers</p>
                 </div>
              </div>

           </div>
        </div>
     </section>

    );
}

export default Highlight; 