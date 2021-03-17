import Link from 'next/link'
import styles from './Information.module.scss'

function Information() {
    return (
        <section className="hero">
        <div className="container">
           <div className="image-wrapper-features">
              <img src="/Illustration-2.png" />
           </div>

           <div className="text-wrapper-features">
              <h1 className="text-title-features">We Provide Many Features You Can Use</h1>
              <p className="description-features">You can explore the features that we provide with fun and have their own functions each feature.</p>
           <div className="list-features">
                 <li>
                    <img className="image-features" src="/check-circle.svg" />
                    <p className="desc-list-features">Powerfull online protection.</p>
                 </li>
                 <li>
                    <img className="image-features" src="/check-circle.svg" />
                    <p className="desc-list-features">Internet without borders..</p>
                 </li>
                 <li>
                    <img className="image-features" src="/check-circle.svg" />
                    <p className="desc-list-features">Supercharged VPN.</p>
                 </li>
                 <li>
                    <img className="image-features" src="/check-circle.svg" />
                    <p className="desc-list-features">No specific time limits.</p>
                 </li>
              </div>
           </div>
        </div>
     </section>
    );
}

export default Information; 