import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';

import imgCar from '../statics/img.png';
import '../styles/components/carousel.scss';

class Carousel extends Component {

  componentDidMount(){
    document.addEventListener('DOMContentLoaded', () => {
      const elmCarousel = document.querySelector('.carousel');
      M.Carousel.init(elmCarousel, {
        fullWidth: true,
        indicators: true
      });
    });
  }

  render(){
    return (
      <div>
        <div className="carousel carousel-slider container-carousel">
          <Link className="carousel-item" to="#one!"><img src={imgCar} alt="baners"/></Link>
          <Link className="carousel-item" to="#two!"><img src={imgCar} alt="baners"/></Link>
          <Link className="carousel-item" to="#three!"><img src={imgCar} alt="baners"/></Link>
          <Link className="carousel-item" to="#four!"><img src={imgCar} alt="baners"/></Link>
        </div>
      </div>
    );
  }
}

export default Carousel;