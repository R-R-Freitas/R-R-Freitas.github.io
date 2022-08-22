import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/Header.css';

function Header() {
  return (
    <div className="Header">
      <div className='HeaderItem'>
        <Link
          className='HeaderLink'
          to='#AboutMe'
          >
          Sobre mim
        </Link>
      </div>
      <div className='HeaderItem'>
        <Link
          className='HeaderLink'
          to='#Projects'
          >
          Projetos
        </Link>
      </div>
      <div className='HeaderItem'>
        <Link
          className='HeaderLink'
          to='#Contact'
          >
          Contato
        </Link>
      </div>
    </div>
  )
}

export default Header;
