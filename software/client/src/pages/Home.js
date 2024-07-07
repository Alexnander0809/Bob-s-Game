import React from 'react';
import Slider from '../components/slider.jsx'; // Asegúrate de ajustar la ruta según la ubicación de tu archivo Slider.js
import './Home.css'; // Asegúrate de que esta línea esté presente

const Home = () => {
    return (
        <div>
            <meta charSet="UTF-8" />
            <title>CodePen - Fashion concept</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
            <link rel="stylesheet" href="./style.css" />
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
                        <a href="pastelinkhere" target="_blank"><span>tik tok</span></a>
                    </li>
                </ul>
            </nav>

            {/* Integra el componente Slider aquí */}
            <Slider />

            <span className="scroll">scroll</span>
            <figure className="vert-text">
                <span>lorem ipsum dolor sit amet</span>
            </figure>
        </div>
    );
}

export default Home;
