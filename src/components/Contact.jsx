import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';
import githubLogo from '../images/github.png';
import linkedInLogo from '../images/linkedIn.png'

const linkedInPage = 'https://www.linkedin.com/in/rodrigo-rafael-freitas/';
const githubProfile = 'https://github.com/R-R-Freitas';

function Contact() {
  return (
    <div className='Contact'>
      <h1 id='Contact' className='ContactTitle'>Contato</h1>
      <div className='ContactContent'>
        <Link
          to={linkedInPage}
          >
          <img className='ContactLogo' src={linkedInLogo} alt='LinkedIn'/>
        </Link>
        <Link
          to={githubProfile}
          >
          <img className='ContactLogo' src={githubLogo} alt='Github'/>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
