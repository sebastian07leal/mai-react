import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/socialMedia.scss';

const SocialMedia = ({ images, path }) => {
  return (
    <Link to={path} className="socialMedia" target="_blank">    
      <img  src={images} alt="images-Social"/>
    </Link>
  );
}

export default SocialMedia;