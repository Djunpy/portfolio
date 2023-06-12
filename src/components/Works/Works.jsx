import React from 'react';
import WorksItem from './WorksItem';
import DeliverIcon from '../../assets/projects/delivery-app.png';
import GimIcon from '../../assets/projects/gym.png';
import ShopIcon from '../../assets/projects/ecommerce-app.jpg';

const items = [
  {
    id: 1,
    name: 'Ландинг для Фитнес клуба',
    img: GimIcon,
    url: 'https://react-gym-app-orcin.vercel.app',
    stack: ['React', 'Tailwind'],
  },
  {
    id: 2,
    name: 'Сайт для Пицерии',
    img: DeliverIcon,
    url: 'https://react-delivery-app.vercel.app/home',
    stack: ['React', 'Redux - Toolkit', 'Tailwind'],
  },
  {
    id: 3,
    name: 'Магазин одежды',
    img: ShopIcon,
    url: 'https://github.com/Djunpy/clothing_store',
    stack: ['Django', 'CSS'],
  },
];

const Works = () => {
  return (
    <div name='works' className='works'>
      <div className='container'>
        <h1>./Works</h1>
        <div className='works-items'>
          {items.map((item) => (
            <WorksItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
