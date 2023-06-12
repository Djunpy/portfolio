import React from 'react';
import SidebarItem from './SidebarItem';
import GitImg from '../../assets/icons/github-logo_icon-icons.com_73546.svg';
import LinkedIcon from '../../assets/icons/linkedin_logo_icon_143748.svg';
import InstIcon from '../../assets/icons/instagram_f_icon-icons.com_65485.svg';
import ResumeIcon from '../../assets/icons/4288583documentfileresearchresumesearch-115773_115740.svg';

const items = [
  {
    id: 1,
    display: 'Github',
    image: GitImg,
    color: '#808285',
    path: 'https://github.com/',
  },
  {
    id: 2,
    display: 'Instagram',
    image: InstIcon,
    color: '#E443A2',
    path: 'https://www.instagram.com/vovnenkoyurii/',
  },
  {
    id: 3,
    display: 'LinkedIn',
    image: LinkedIcon,
    color: '#0095D9',
    path: 'https://www.linkedin.com/in/vovnenko-yurii-62045122a/',
  },
  {
    id: 4,
    display: 'Resume',
    image: ResumeIcon,
    color: '#32a88f',
    path: './resume.pdf',
  },
];

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        {items.map((item) => (
          <SidebarItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
