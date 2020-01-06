import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/header.scss';
import imgLogo from '../statics/img.png'; 


class Header extends Component {

  render(){
    return (
      <div>
        <nav className='header'>
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo container__logo"><img src={imgLogo} alt="Logo"/></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Contactanos</Link></li>
              <li><Link to="/">¿Quienes somos?</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;