import Link from "next/link";
import styles from "./Customer.module.scss";

function CustomerSection() {
  return (
    <section className="hero-2">
      <div className="network">
        <h1 className="network-title">
          Huge Global Network
          <br />
          of Fast VPN
        </h1>
        <p className="network-description">
          See <b>LaslesVPN</b> everywhere to make it easier for you when you
          move locations.
        </p>
        <img className="image-network" src="/Illustration-4.png" />
      </div>

      <div className="sponsor">
        <img className="image-sponsor" src="/Sponsor-1.png" />
        <img className="image-sponsor" src="/Sponsor-2.png" />
        <img className="image-sponsor" src="/Sponsor-3.png" />
        <img className="image-sponsor" src="/Sponsor-4.png" />
        <img className="image-sponsor" src="/Sponsor-5.png" />
      </div>
    </section>
  );
}

export default CustomerSection;