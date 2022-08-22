import React from 'react';
import Project from './Project';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    { name: 'Trivia Project', link: 'https://github.com/R-R-Freitas/Trivia-Project' },
    { name: 'Recipes App', link: 'https://github.com/R-R-Freitas/RecipesApp' },
    { name: 'Trybe Futebol Clube', link: 'https://github.com/R-R-Freitas/trybe-futebol-clube' },
    { name: 'Car Shop', link: 'https://github.com/R-R-Freitas/car-shop' },
  ]
  return (
    <div className='Projects'>
      <h1 id='Projects' className='ProjectsTitle'>Alguns Projetos</h1>
      { projects.map((project, index) =>
        <Project 
          key={index}
          name={project.name}
          link={project.link}
        />
      )}
    </div>
  );
};

export default Projects;
