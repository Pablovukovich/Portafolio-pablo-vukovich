import React from 'react'
import { useParams } from 'react-router-dom';
import { proyectos } from './../../data/proyectos.js';  // El array con los proyectos
import { BlogKnews } from './BlogKnews';
import { PinkterestKnews } from './PinkterestKnews';
import { ErrorNotFound } from '../secciones/ErrorNotFound.jsx';
import { RandomMusic } from './RandomMusic.jsx';



export const PlantillaProyecto = () => {
 
  const { id } = useParams(); // Recupera el ID desde la URL
  const proyecto = proyectos.find(proyecto => proyecto.id === parseInt(id));

  if (!proyecto) {
    return <ErrorNotFound/>
  }

  // Puedes renderizar diferentes componentes según el proyecto
  if (proyecto.titulo === 'BLOG KNEWS') {
    return <BlogKnews proyecto={proyecto} />;
  } else if (proyecto.titulo === 'PINKTEREST') {
    return <PinkterestKnews proyecto={proyecto} />;
  }else if (proyecto.titulo === 'RANDOM MUSIC'){
    return <RandomMusic proyecto={proyecto} />
  }

  // Puedes agregar más condiciones para otros proyectos
  return <ErrorNotFound/>;
    
    
  
}
