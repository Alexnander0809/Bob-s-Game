import React from 'react';
import { TweenMax } from 'gsap';
import * as THREE from 'three';
import '../styles/index.css';
import Slider from "../components/slider";

const Home = () => {
  return (
    <div>
      <nav className="nav nav--left js-nav">
        <ul>
          <li>
            <a href="#"><span>we do</span></a>
          </li>
          <li>
            <a href="#"><span>contact</span></a>
          </li>
          <li>
            <a href="#" className="is-active"><span>home</span></a>
          </li>
        </ul>
      </nav>

      <figure className="logo">
        <img src="/logolight.png" alt="Logo" />
      </figure>

      <nav className="nav nav--right">
        <ul>
          <li>
            <a href="pastelinkhere" target="_blank" rel="noopener noreferrer"><span>tik tok</span></a>
          </li>
        </ul>
      </nav>

      <div className="slider js-slider">
        <div className="slider__inner js-slider__inner">
          {/* Aquí colocas el componente Slider */}
          <Slider />
        </div>

        <div className="slide js-slide">
          <div className="slide__content">
            <figure className="slide__img js-slide__img">
              <img src="" alt="" />
            </figure>
            <figure className="slide__img js-slide__img">
              <img src="" alt="" />
            </figure>
          </div>

          <div className="slider__text js-slider__text">
            <div className="slider__text-line js-slider__text-line"><div>lorem ipsum</div></div>
            <div className="slider__text-line js-slider__text-line"><div>lorem ipsum</div></div>
            <div className="slider__text-line js-slider__text-line"><div>lorem ipsum</div></div>
            <div className="slider__text-line js-slider__text-line"><div>lorem ipsum</div></div>
          </div>
        </div>

        <div className="slide js-slide">
          <div className="slide__content">
            <figure className="slide__img js-slide__img">
              <img src="" alt="" />
            </figure>
            <figure className="slide__img js-slide__img">
              <img src="" alt="" />
            </figure>
          </div>
        </div>

        <div className="slide js-slide">
          <div className="slide__content">
            <figure className="slide__img js-slide__img">
              <img src="" alt="" />
            </figure>
            <figure className="slide__img js-slide__img">
              <img src="" alt="" />
            </figure>
          </div>
        </div>

        <nav className="slider__nav js-slider__nav">
          <div className="slider-bullet js-slider-bullet">
            <span className="slider-bullet__text js-slider-bullet__text">01</span>
            <span className="slider-bullet__line js-slider-bullet__line"></span>
          </div>
          <div className="slider-bullet js-slider-bullet">
            <span className="slider-bullet__text js-slider-bullet__text">02</span>
            <span className="slider-bullet__line js-slider-bullet__line"></span>
          </div>
          <div className="slider-bullet js-slider-bullet">
            <span className="slider-bullet__text js-slider-bullet__text">03</span>
            <span className="slider-bullet__line js-slider-bullet__line"></span>
          </div>
        </nav>

        <div className="scroll js-scroll">Scroll</div>
      </div>

      <div className="vert-text">
        <span>
          B0B studios<br />
        </span>
      </div>
    </div>
  );
};

export default Home;
