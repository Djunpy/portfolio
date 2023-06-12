import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Works from '../components/Works/Works';

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Works />
    </div>
  );
};

export default Home;
