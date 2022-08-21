import React, { Component } from 'react';
import photo from '../images/photo.jpg';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
const myName = 'Rodrigo Rafael Freitas';

export default class Main extends Component {
  render() {
    return (
    <div className="Main">
      <Header />
      <About
        photo={ photo }
        name={ myName }
        profession="Full-Stack Developer"
      />
      <Projects />
      <Contact />
    </div>
    );
  };
};
