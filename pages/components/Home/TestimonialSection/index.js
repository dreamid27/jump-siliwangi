import Link from "next/link";
import styles from "./Testimonial.module.scss";
import Logo from "@public/logo.png";

function TestimonialSection() {
  return (
    <section className="hero-2">
      <div className="testimonials">
        <h1 className="testimonials-title">
          Trusted by Thousands of Happy Customer
        </h1>
        <p className="testimonials-description">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
      </div>

      <div class="wrapper-card">
        <div class="card">
          <div class="card-title">
            <img className="image-testimonials" src="/Illustration-3.png" />
            <h3>Free Plan</h3>
          </div>
          <div class="card-description">
            <ul>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Unlimited Bandwitch</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Encrypted Connection</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">No Traffic Logs</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Works an All Devices</h1>
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
            <img className="image-testimonials" src="/Illustration-3.png" />
            <h3>Standart Plan</h3>
          </div>
          <div class="card-description">
            <ul>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Unlimited Bandwitch</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Encrypted Connection</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Yes Traffic Logs</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Works an All Devices</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Connect Anywhere</h1>
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
            <img className="image-testimonials" src="/Illustration-3.png" />
            <h3>Premium Plan</h3>
          </div>
          <div class="card-description">
            <ul>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Unlimited Bandwitch</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Encrypted Connection</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Yes Traffic Logs</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Works an All Devices</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Connect Anywhere</h1>
              </li>
              <li>
                <img className="image-list-testimonials" src="/check.svg" />
                <h1 className="desc-list-testimonials">Get New Features</h1>
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
export default TestimonialSection;
