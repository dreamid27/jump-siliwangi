import styles from './Testi.module.css'
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Testi extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
    render() {
        const settings = {
            dots: false,
            infinite: false,
            dotClass: "testi-tab",
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            appendDots: dots => <ul>{dots}</ul>,
            variableWidth: true
  };
        return (
            <div className={styles.testimonial}>
            <div className={styles['testi-heading']}>
              <h1>Trusted by Thousands of<br></br>Happy Customer</h1>
              <p>These are the stories of our customers who have joined us with great<br></br>pleasure when using this crazy feature.</p>
            </div>
            <div className={styles['testi-row-card']}>
              <Slider ref={c => (this.slider = c)} {...settings}>
              <div className={styles['testi-card']}>
                <div className={styles['testi-card-heading']}>
                  <img className = "user" src="/pp1.png" alt=""/>
                  <div className={styles['testi-name']}>
                    <h1>Viezh Robert
                    <span><br></br>Warsaw, Poland</span></h1>
                  </div>
                  <div className={styles.rating}>
                  <p>4.5</p>
                  <img src="/star.png" alt=""/>
                  </div>
                </div>
                <div className={styles['testi-card-body']}>
                “Wow... I am very happy to use this VPN, it<br></br>
                turned out to be more than my expectations<br></br>
                and so far there have been no problems.<br></br>
                LaslesVPN always the best”.
                </div>
              </div>
              <div className={styles['testi-card']}>
                <div className={styles['testi-card-heading']}>
                  <img className = "user" src="/pp2.png" alt=""/>
                  <div className={styles['testi-name']}>
                    <h1>Yessica Christy
                    <span><br></br>Shanxi, China</span></h1>
                  </div>
                  <div className={styles.rating}>
                  <p>4.5</p>
                  <img src="/star.png" alt=""/>
                  </div>
                </div>
                <div className={styles['testi-card-body']}>
                “I like it because I like to travel far and still can<br>
                </br>connect with high speed.”.
                </div>
              </div>
              <div className={styles['testi-card']}>
                <div className={styles['testi-card-heading']}>
                  <img className = "user" src="/pp3.png" alt=""/>
                  <div className={styles['testi-name']}>
                    <h1>Kim Young Jou
                    <span><br></br>Seoul, South Korea</span></h1>
                  </div>
                  <div className={styles.rating}>
                  <p>4.5</p>
                  <img src="/star.png" alt=""/>
                  </div>
                </div>
                <div className={styles['testi-card-body']}>
                “This is very unusual for my business that<br>
                </br> currently requires a virtual private network<br>
                </br>that has high security.”.
                </div>
              </div>
              </Slider>
              
            </div>
            <div className={styles.tab}>
              <ul className={styles['testi-tab']}>
                <li className={styles.active}></li>
                <li></li>
                <li className={styles.dot}></li>
                <li></li>
              </ul>
              <div className={styles['testi-tab-arrow-btn']}>
                <button onClick={this.previous} className={styles.arrowbtn1}></button>
                <button onClick={this.next} className={styles.arrowbtn2}></button>
              </div>
            </div>
          </div>
        );
    }
}