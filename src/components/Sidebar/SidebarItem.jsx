import React from 'react';

const SidebarItem = ({ item }) => {
  return (
    <a
      className='sidebar-item'
      href={item.path}
      style={{ backgroundColor: `${item.color}` }}
    >
      <span>{item.display}</span>
      <img src={item.image} alt='' />
    </a>
  );
};

export default SidebarItem;
