import React, { Component } from 'react';
//import M from 'materialize-css/dist/js/materialize.min.js';

import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';

class Home extends Component {

  render(){ 
    return (
      <>
        <Header />
        <Carousel />
        <section className="container">
          <Contact />
        </section>
      </>
    )
  };
}

export default Home;