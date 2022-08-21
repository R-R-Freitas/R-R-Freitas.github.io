import React from 'react';

function About(photo, myName, profession) {
  return (
    <div className='About'>
      <img className='AboutPhoto' src={photo} alt={myName} />
      <p className='AboutName'>{myName}</p>
      <p className='AboutProfession'>{profession}</p>
      <p className='AboutContent'>
        Olá, me chamo {myName}, {profession}.
        Aqui você pode dar uma olhada nos meus projetos e me seguir no LinkedIn e Github
      </p>
    </div>
  );
};

export default About;