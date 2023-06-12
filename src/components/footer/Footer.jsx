import React from 'react';
import Logo from '../../assets/img/logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-logo'>
          <img src={Logo} alt='' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
