import React from 'react';
import photo from '../images/photo.jpg';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Main () {
  return (
    <div className="Main">
      <Header />
      <About
        photo={photo}
        name='Rodrigo Rafael Freitas'
        profession='Full-Stack Developer'
      />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
