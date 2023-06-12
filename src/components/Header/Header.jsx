import React from 'react';
import Video from '../../assets/video/video3.webm';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header name='home' className='header'>
      <div className='header-video'>
        <video src={Video} autoPlay loop muted />
      </div>
      <div className='header-content'>
        <p>Hi, my name is</p>
        <h1>Vovnenko Yurii</h1>
        <h2>I'm a Full Stack Developer.</h2>
        <div className='header-btns'>
          <Link to='about' smooth={true} duration={500}>
            <button>Подробней</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
