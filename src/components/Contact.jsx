import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../images/github.png';
import linkedInLogo from '../images/linkedIn.png'

const linkedInPage = 'https://www.linkedin.com/in/rodrigo-rafael-freitas/';
const githubProfile = 'https://github.com/R-R-Freitas';

function Contact() {
  return (
    <div className='Contact'>
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
  );
};

export default Contact;
