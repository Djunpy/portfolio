import React from 'react';
import { Link } from 'react-scroll';

const NavItem = ({ link, openMobileMenu, setopenMobileMenu }) => {
  const handleMobileMenu = () => {
    if (openMobileMenu) {
      setopenMobileMenu(!openMobileMenu);
    }
  };
  return (
    <>
      <Link
        className='mobile-menu-item'
        onClick={handleMobileMenu}
        to={link.name}
        smooth={true}
        duration={500}
      >
        {link.display}
      </Link>
    </>
  );
};

export default NavItem;
