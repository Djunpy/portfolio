import React from 'react';

const WorksItem = ({ item }) => {
  return (
    <div className='works-item'>
      <div className='item-wrap'>
        <h2>{item.name}</h2>
        <a href={item.url}>
          <img className='item-img' src={item.img} alt={item.name} />
        </a>
        <div className='stack-items'>
          {item.stack.map((stack, index) => (
            <span key={index}>
              {stack}
              {index < item.stack.length - 1 ? ',' : ''}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorksItem;
