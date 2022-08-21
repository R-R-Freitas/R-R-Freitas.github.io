import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
      <Link
        className='HeaderLink'
        to='#Sobre mim'
      >
        Sobre mim
      </Link>
      <Link
        className='HeaderLink'
        to='#Projetos'
      >
        Projetos
      </Link>
      <Link
        className='HeaderLink'
        to='#Habilidades e Conhecimentos'
      >
        Habilidades e Conhecimentos
      </Link>
      <Link
        className='HeaderLink'
        to='#Contato'
      >
        Contato
      </Link>
    </div>
  )
}

export default Header;