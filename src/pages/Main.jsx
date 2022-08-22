import React from 'react';
import photo from '../images/photo.jpg';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import '../styles/Main.css';

function Main () {
  return (
    <div className="Main">
      <Header />
      <About
        photo={photo}
        myName='Rodrigo Rafael Freitas'
        profession='Desenvolvedor Full-Stack'
      />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
