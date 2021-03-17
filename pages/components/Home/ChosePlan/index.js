import Link from 'next/link'
import styles from './Chose.module.scss'

function ChosePlan() {
    return (
        <section className="hero-2">
        <div className="pricing">
           <h1 className="pricing-title">Choose Your Plan</h1>
           <p className="pricing-description">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        </div>
        
        <div class="pricing-wrapper-card">
           <div class="pricing-card">
              <div class="pricing-card-title">
                 <img className="image-pricing" src="/Illustration-3.png" />
                 <h3>Free Plan</h3>
              </div>
              <div class="pricing-card-description">
                 <ul>
                    <li>
                       <img className="image-list-pricing" src="/check.svg" />
                       <h1 className="desc-list-pricing">Unlimited Bandwitch</h1>
                    </li>
                    <li>
                       <img className="image-list-pricing" src="/check.svg" />
                       <h1 className="desc-list-pricing">Encrypted Connection</h1>
                    </li>
                    <li>
                       <img className="image-list-pricing" src="/check.svg" />
                       <h1 className="desc-list-pricing">No Traffic Logs</h1>
                    </li>
                    <li>
                       <img className="image-list-pricing" src="/check.svg" />
                       <h1 className="desc-list-pricing">Works an All Devices</h1>
                    </li>
                 </ul>
              </div>
              <div class="pricing-card-action">
                 <h1>Free</h1>
                 <button type="button">Select</button>
              </div>
           </div>
        

    );
}

export default ChosePlan; 