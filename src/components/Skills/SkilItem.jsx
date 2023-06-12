import React from 'react';

const SkilItem = ({ item }) => {
  return (
    <div className='skills-item'>
      <img src={item.image} alt='' />
    </div>
  );
};

export default SkilItem;
