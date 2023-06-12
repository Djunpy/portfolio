import React from 'react';
import PythonIcon from '../../assets/img/python_94570.svg';
import DjangoIcon from '../../assets/img/file_type_django_icon_130645.svg';
import ReactIcon from '../../assets/img/react_original_logo_icon_146374.svg';
import CssIcon from '../../assets/img/file_type_css_icon_130661.svg';
import DockerIcon from '../../assets/img/file_type_docker_icon_130643.svg';
import JsIcon from '../../assets/img/javascript_icon_130900.svg';
import PostgresIcon from '../../assets/img/postgresql-logo-svgrepo-com.svg';
import SkilItem from './SkilItem';

const items = [
  {
    id: 1,
    image: PythonIcon,
  },
  {
    id: 2,
    image: DjangoIcon,
  },
  {
    id: 3,
    image: JsIcon,
  },
  {
    id: 4,
    image: ReactIcon,
  },
  {
    id: 5,
    image: CssIcon,
  },
  {
    id: 6,
    image: DockerIcon,
  },
  {
    id: 7,
    image: PostgresIcon,
  },
];

const Skills = () => {
  return (
    <div name='skills' className='skills'>
      <div className='container'>
        <h1>./Skills</h1>
        <div className='skills-items'>
          {items.map((item) => (
            <SkilItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
