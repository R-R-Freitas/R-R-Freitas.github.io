import React from 'react';
import { Link } from 'react-router-dom';

function Project({ name, link }) {
  return(
    <div className='Project'>
      <Link to={link}>{name}</Link>
    </div>
  )
}

export default Project;
