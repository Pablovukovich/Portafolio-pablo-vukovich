import React, { useState } from 'react'
import { skills } from '../../../data/data'
import { CardSkill } from './CardSkill'

export const Carrousel = () => {

  const carrouselSkills = [...skills, ...skills];
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);  // Pausar la animación
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Reanudar la animación
  };
  return (
    <>
      <div className='container my-12 bg-second showAnimacion  '>
        <div className='overflow-hidden w-full shadow-inner '>
          <div  onMouseEnter={handleMouseEnter} //onMouseEnter evento de cursosr sobre elemento 
                onMouseLeave={handleMouseLeave} //onMouseOver envento sobre el cursos fuera del elemento 
                  className={`flex whitespace-nowrap animate-scroll ${ isPaused ? 'paused' : ''}  `}>

            { 
              carrouselSkills.map((skill, index) => (
                <CardSkill skill={skill} key={index} />
                  
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}
