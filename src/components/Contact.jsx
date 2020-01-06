import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import '../styles/components/contact.scss';

import imgSocial from '../statics/img.png';

class Contact extends Component {

  render(){
    return (
      <div className="container-contact">
        <div className="container-contact__header">
          <h2>CONTACTANOS</h2>
          <p>Encuentranos en nuestras diferentes redes sociales</p>
        </div>
        <div className="social-container">
          <SocialMedia images={imgSocial} path="/" />
          <SocialMedia images={imgSocial} path="/" />
          <SocialMedia images={imgSocial} path="/" />
        </div>
      </div>
    );
  }
}

export default Contact;