import React from 'react';
import Project from './Project';

function Projects() {
  const projects = [
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
    { name: '', link: '' },
  ]
  return (
    <div className='Projects'>

    { projects.map((project) =>
      <Project 
        name={project.name}
        link={project.link}
      />
      )}
    </div>
  )
}

export default Projects;
