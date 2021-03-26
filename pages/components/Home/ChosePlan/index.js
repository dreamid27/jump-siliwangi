import Link from "next/link";
import styles from "./Chose.module.scss";

function ChosePlan() {
  return (
    <section className="hero-2">
      <div className="pricing">
        <h1 className="pricing-title">Choose Your Plan</h1>
        <p className="pricing-description">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>

      <div class="wrapper-card">
        <div class="card">
          <div class="card-title">
            <img className="image-pricing" src="/Illustration-3.png" />
            <h3>Free Plan</h3>
          </div>
          <div class="card-description">
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
          <div class="card-action">
            <h1>Free</h1>
            <button type="button">Select</button>
          </div>
        </div>

        <div class="card">
          <div class="card-title">
            <img className="image-pricing" src="/Illustration-3.png" />
            <h3>Standart Plan</h3>
          </div>
          <div class="card-description">
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
                <h1 className="desc-list-pricing">Yes Traffic Logs</h1>
              </li>
              <li>
                <img className="image-list-pricing" src="/check.svg" />
                <h1 className="desc-list-pricing">Works an All Devices</h1>
              </li>
              <li>
                <img className="image-list-pricing" src="/check.svg" />
                <h1 className="desc-list-pricing">Connect Anywhere</h1>
              </li>
            </ul>
          </div>
          <div class="card-action">
            <h1>$9 / mo</h1>
            <button type="button">Select</button>
          </div>
        </div>
        <div class="card">
          <div class="card-title">
            <img className="image-pricing" src="/Illustration-3.png" />
            <h3>Premium Plan</h3>
          </div>
          <div class="card-description">
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
                <h1 className="desc-list-pricing">Yes Traffic Logs</h1>
              </li>
              <li>
                <img className="image-list-pricing" src="/check.svg" />
                <h1 className="desc-list-pricing">Works an All Devices</h1>
              </li>
              <li>
                <img className="image-list-pricing" src="/check.svg" />
                <h1 className="desc-list-pricing">Connect Anywhere</h1>
              </li>
              <li>
                <img className="image-list-pricing" src="/check.svg" />
                <h1 className="desc-list-pricing">Get New Features</h1>
              </li>
            </ul>
          </div>
          <div class="card-action">
            <h1>$12 / mo</h1>
            <button type="button">Select</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChosePlan;
