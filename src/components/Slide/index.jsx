import React, { useRef } from 'react';
import './index.css';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { FiArrowRightCircle } from 'react-icons/fi';

const Slideshow = () => {
  const Slideshow = useRef(null);
  const next = () => {
    if (Slideshow.current.children.length > 0) {
      const firstElement = Slideshow.current.children[0];

      Slideshow.current.style.transition = '300ms ease-out all';
      const size = Slideshow.current.children[0].offsetWidth;
      Slideshow.current.style.transform = `translateX(-${size}px)`;

      const transition = () => {
        Slideshow.current.style.transition = 'none';
        Slideshow.current.style.transform = `translateX(0)`;

        Slideshow.current.appendChild(firstElement);

        Slideshow.current.removeEventListener('transitionend', transition);
      };
      Slideshow.current.addEventListener('transitionend', transition);
    }
  };
  const previous = () => {
    if (Slideshow.current.children.length > 0) {
      const index = Slideshow.current.children.length - 1;
      const lastElement = Slideshow.current.children[index];
      Slideshow.current.insertBefore(lastElement, Slideshow.current.firstChild);
      Slideshow.current.style.transition = 'none';

      const size = Slideshow.current.children[0].offsetWidth;
      Slideshow.current.style.transform = `translateX(-${size}px)`;

      setTimeout(() => {
        Slideshow.current.style.transition = '300ms ease-out all';
        Slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  return (
    <div className="slide-container">
      <div className="sliderShow" ref={Slideshow}>
        <div className="slider">
          <img
            src="/img/car-travelling-by-a-sunny-road.jpg"
            alt="car com por do sol"
          />

          <div className="text-slider">
            <p>carro com por do sol</p>
          </div>
        </div>
        <div className="slider">
          <img
            src="/img/blue-sport-sedan-parked-in-the-yard.jpg"
            alt="sedan blue"
          />
          <div className="text-slider">
            <p>Sedan Azul</p>
          </div>
        </div>
        <div className="slider">
          <img src="/img/red-luxury-sedan-on-the-road.jpg" alt="sedan red" />
          <div className="text-slider">
            <p>Sedan Vermelho</p>
          </div>
        </div>
      </div>
      <div className="controllers">
        <button className="button left" onClick={previous}>
          <FiArrowLeftCircle />
        </button>
        <button className="button right" onClick={next}>
          <FiArrowRightCircle />
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
