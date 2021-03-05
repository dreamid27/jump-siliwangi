import styles from './Testimonials.module.css'
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Testimonials extends Component {
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
  render(){
    const settings = {
      dots: true,
      infinite: false,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false,
      dotsClass: "button__bar",
    };
    return (
      <div className={styles.testimonials}>
      <h1>
        Trusted by Thousands of Happy Customer
      </h1>
      <p>
        These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
      </p>
      <div className={styles.testiContent}>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div className={styles.slidWrap}>
            <div className={styles.testiContentWrap}>
              <div className={styles.testiContentHead}>
                <div className={styles.testiContentHeadAva}>
                  <img src="/ava1.png"></img>
                </div>
                <div className={styles.testiContentHeadName}>
                  <h2>Viezh Robert</h2>
                  <a>Warsaw, Poland</a>
                </div>
                <div className={styles.testiContentHeadStar}>
                  <h1>4.5</h1>
                  <div><img src="/star.png"></img></div>
                </div>
              </div>
              <div className={styles.testiContentText}>
                <h1>
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.slidWrap}>
            <div className={styles.testiContentWrap}>
              <div className={styles.testiContentHead}>
                <div className={styles.testiContentHeadAva}>
                  <img src="/ava2.png"></img>
                </div>
                <div className={styles.testiContentHeadName}>
                  <h2>Yessica Christy</h2>
                  <a>Shanxi, China</a>
                </div>
                <div className={styles.testiContentHeadStar}>
                  <h1>4.5</h1>
                  <div><img src="/star.png"></img></div>
                </div>
              </div>
              <div className={styles.testiContentText}>
                <h1>
                  “I like it because I like to travel far and still can connect with high speed.”
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.slidWrap}>
            <div className={styles.testiContentWrap}>
              <div className={styles.testiContentHead}>
                <div className={styles.testiContentHeadAva}>
                  <img src="/ava3.png"></img>
                </div>
                <div className={styles.testiContentHeadName}>
                  <h2>Kim Young Jou</h2>
                  <a>Seoul, South Korea</a>
                </div>
                <div className={styles.testiContentHeadStar}>
                  <h1>4.5</h1>
                  <div><img src="/star.png"></img></div>
                </div>
              </div>
              <div className={styles.testiContentText}>
                <h1>
                “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.slidWrap}>
            <div className={styles.testiContentWrap}>
              <div className={styles.testiContentHead}>
                <div className={styles.testiContentHeadAva}>
                  <img src="/ava1.png"></img>
                </div>
                <div className={styles.testiContentHeadName}>
                  <h2>Viezh Robert</h2>
                  <a>Warsaw, Poland</a>
                </div>
                <div className={styles.testiContentHeadStar}>
                  <h1>4.5</h1>
                  <div><img src="/star.png"></img></div>
                </div>
              </div>
              <div className={styles.testiContentText}>
                <h1>
                  “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.slidWrap}>
            <div className={styles.testiContentWrap}>
              <div className={styles.testiContentHead}>
                <div className={styles.testiContentHeadAva}>
                  <img src="/ava2.png"></img>
                </div>
                <div className={styles.testiContentHeadName}>
                  <h2>Yessica Christy</h2>
                  <a>Shanxi, China</a>
                </div>
                <div className={styles.testiContentHeadStar}>
                  <h1>4.5</h1>
                  <div><img src="/star.png"></img></div>
                </div>
              </div>
              <div className={styles.testiContentText}>
                <h1>
                  “I like it because I like to travel far and still can connect with high speed.”
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.slidWrap}>
            <div className={styles.testiContentWrap}>
              <div className={styles.testiContentHead}>
                <div className={styles.testiContentHeadAva}>
                  <img src="/ava3.png"></img>
                </div>
                <div className={styles.testiContentHeadName}>
                  <h2>Kim Young Jou</h2>
                  <a>Seoul, South Korea</a>
                </div>
                <div className={styles.testiContentHeadStar}>
                  <h1>4.5</h1>
                  <div><img src="/star.png"></img></div>
                </div>
              </div>
              <div className={styles.testiContentText}>
                <h1>
                “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                </h1>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div className={styles.btnSlider}>
        {/* <div className={styles.btnSliderLeft}>
        </div> */}
        <div className={styles.btnSliderRight}>
          <button onClick={this.previous} className={styles.btnSliderRightarLeft}></button>
          <button onClick={this.next} className={styles.btnSliderRightarRight}></button>
        </div>
      </div>
    </div>
    );

  }
}