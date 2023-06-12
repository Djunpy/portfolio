import { useState, useEffect } from 'react';
import Logo from '../../assets/img/logo.svg';
import NavItem from './NavItem';
import { Link } from 'react-scroll';

const nav_link = [
  {
    id: 1,
    display: 'About',
    name: 'about',
  },
  {
    id: 2,
    display: 'Skills',
    name: 'skills',
  },
  {
    id: 3,
    display: 'Works',
    name: 'works',
  },
  // {
  //   id: 4,
  //   display: 'CV',
  //   name: './resume.pdf',
  // },
];

const Navbar = () => {
  const [openMobileMenu, setopenMobileMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScroll(currentScrollY > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const mobileMenu = () => {
    setopenMobileMenu(!openMobileMenu);
  };
  return (
    <div className={`nav ${isScroll ? 'scrolled' : ''}`}>
      <div className='container nav-wrap'>
        <Link to='home' smooth={true} duration={500}>
          <img className='nav-logo' src={Logo} alt='logo' />
        </Link>
        <nav className='nav-menu'>
          {nav_link.map((link) => (
            <NavItem key={link.id} link={link} />
          ))}
        </nav>
        <div className={`mobile-menu ${openMobileMenu ? 'active' : ''}`}>
          <nav>
            {nav_link.map((link) => (
              <NavItem
                key={link.id}
                link={link}
                openMobileMenu={openMobileMenu}
                setopenMobileMenu={setopenMobileMenu}
              />
            ))}
          </nav>
        </div>
        <div
          className={`nav-menu-icon ${
            openMobileMenu ? 'open-mobile-menu close' : ''
          }`}
          onClick={mobileMenu}
        >
          <div className={`${openMobileMenu ? 'close' : ''}`}></div>
          <div className={`${openMobileMenu ? 'close' : ''}`}></div>
          <div className={`${openMobileMenu ? 'close' : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
