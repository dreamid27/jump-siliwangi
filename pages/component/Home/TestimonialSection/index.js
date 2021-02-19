import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './style.module.css';
import profileImg from '@public/profile.png';
import starImg from '@public/star.png';
import {useRef, useState} from 'react';


const testimonialList = [
    {},
    {},
    {},
    {}
]

const TestimonialSection = () => {
    const sliderRef = useRef(null);
    const [activeSliderIdx, setActiveSlider] = useState(0);
    
    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };

    const changeSlide = (isPrev) => {
        if (isPrev) return sliderRef.current.slickPrev();
        return sliderRef.current.slickNext();
    }

    const changeSlideGoTo = (idx) => {
        sliderRef.current.slickGoTo(idx);
    }

    const changeActiveSlider = (prevIdx, idx) => {
        setActiveSlider(idx);
    }

    return <div className={styles.testimonialContainer}>
        <h3>Trusted by Thousands of Happy Customer</h3>
        <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
        <div className={styles.testiWrapper}>
            <Slider beforeChange={changeActiveSlider} ref={slider => sliderRef.current = slider} {...settings} >
                {testimonialList.map(obj => <div className={styles.testimonialItem} style={{width: 450}}>
                    <div className={styles.cardWrapper}>
                        <div className={styles.cardItem}>
                            <div data-highlight>
                                <img src={profileImg} alt="profile" />
                                <div className={styles.personalData}>
                                    <div data-name>Viezh Robert</div>
                                    <div data-location> Shanxi, China</div>
                                </div>
                                <div className={styles.rating}>
                                    4.5 <img src={starImg} alt="star" /> 
                                </div>
                            </div>
                            <div className={styles.contentTesti}>
                                <p>
                                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> )}
            </Slider>
        </div>
        <div className={styles.navigationContainer}>
            <div className={styles.dotsSlider}>
                {testimonialList.map((b,i) => <div onClick={() => changeSlideGoTo(i)} data-dots data-active={i === activeSliderIdx} key={i}></div>)}
            </div>
            <div className={styles.actionSlider}>
                <div onClick={() => changeSlide(true)} data-prev data-disabled={activeSliderIdx === 0}>
                </div>
                <div onClick={() => changeSlide(false)} data-next data-disabled={activeSliderIdx === 3}>
                </div>
            </div>
        </div>
    </div>
}

export default TestimonialSection;