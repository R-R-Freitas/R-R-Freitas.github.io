import React from 'react';
import '../styles/About.css';

function About({ photo, myName, profession }) {
  const content = `Olá, me chamo ${myName}, e sou ${profession}.
  Aqui você pode dar uma olhada nos meus projetos
  e me seguir no LinkedIn e Github`;
  return (
    <div id='AboutMe' className='About'>
      <img className='AboutPhoto' src={photo} alt={myName} />
      <p className='AboutContent'>{content}</p>
    </div>
  );
};

export default About;