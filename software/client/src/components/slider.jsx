// Slider.jsx

import React, { useRef } from 'react';
import { TweenMax, Power3 } from 'gsap';

const Slider = () => {
    const sliderRef = useRef(null);

    const scrollToSlide = (index) => {
        const offset = -index * sliderRef.current.clientHeight;
        TweenMax.to(sliderRef.current, 0.5, {
            y: offset,
            ease: Power3.easeInOut,
        });
    };

    return (
        <div ref={sliderRef} className="slider__inner">
            <div className="slide" onClick={() => scrollToSlide(0)}>
                <div className="slide__content">
                    <figure className="slide__img js-slide__img">
                        <img src="/image1.jpg" alt="Slide 1" />
                    </figure>
                    <figure className="slide__img js-slide__img">
                        <img src="/image2.jpg" alt="Slide 1" />
                    </figure>
                </div>
                <div className="slider__text js-slider__text">
                    <div className="slider__text-line js-slider__text-line">
                        <div>Slide 1 Text</div>
                    </div>
                    <div className="slider__text-line js-slider__text-line">
                        <div>Slide 1 Text</div>
                    </div>
                    <div className="slider__text-line js-slider__text-line">
                        <div>Slide 1 Text</div>
                    </div>
                    <div className="slider__text-line js-slider__text-line">
                        <div>Slide 1 Text</div>
                    </div>
                </div>
            </div>
            <div className="slide" onClick={() => scrollToSlide(1)}>
                <div className="slide__content">
                    <figure className="slide__img js-slide__img">
                        <img src="/image3.jpg" alt="Slide 2" />
                    </figure>
                    <figure className="slide__img js-slide__img">
                        <img src="/image4.jpg" alt="Slide 2" />
                    </figure>
                </div>
            </div>
            <div className="slide" onClick={() => scrollToSlide(2)}>
                <div className="slide__content">
                    <figure className="slide__img js-slide__img">
                        <img src="/image5.jpg" alt="Slide 3" />
                    </figure>
                    <figure className="slide__img js-slide__img">
                        <img src="/image6.jpg" alt="Slide 3" />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Slider;
