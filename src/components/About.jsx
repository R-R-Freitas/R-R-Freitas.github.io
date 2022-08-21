import React from 'react';

function About({ photo, myName, profession }) {
  const content = `Olá, me chamo ${myName}, e sou ${profession}.
  Aqui você pode dar uma olhada nos meus projetos
  e me seguir no LinkedIn e Github`;
  return (
    <div className='About'>
      <img className='AboutPhoto' src={photo} alt={myName} />
      <p className='AboutName'>{myName}</p>
      <p className='AboutProfession'>{profession}</p>
      <p className='AboutContent'>{content}</p>
    </div>
  );
};

export default About;