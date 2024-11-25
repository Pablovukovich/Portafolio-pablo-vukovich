import React from 'react'
import { NavBarProyectos } from './NavBarProyectos'
import KnewsLogo from './../../../public/K-NEW-LOGO.jpg'
export const Knews = () => {
  return (
    <>
        <NavBarProyectos/>
        <div className='flex flex-col sm:flex-row justify-center items-center m-10 sm:m-20 '>
            <div className='h-auto w-full sm:w-[50%] object-cover m-4 '>
                <img src={KnewsLogo} alt="k new logo" />
            </div>
            <div className='h-full w-full mx-1 sm:w-[70%] sm:mx-10 font-roboto'>
              <p className='font-medium text-start text-xl'><span className='text-2xl font-extrabold'>Knews</span> es un proyecto  enfocado principalmente en <span className='text-2xl font-extrabold text-quinto'>Blackpink</span> y 
                temas relacionados con el grupo. Esta página proporciona un espacio donde los seguidores pueden encontrar información 
                actualizada y detallada sobre las integrantes, lanzamientos de música, eventos y más. El nombre "Knews" juega con las 
                palabras K-Pop y news (noticias en inglés), sugiriendo un enfoque en noticias del mundo del K-Pop, particularmente de 
                Blackpink</p>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center '>
          <a href="https://www.instagram.com/knews.bp/" >
              <div className='h-auto w-64 object-cover m-4 ' target="_BLANK">
                  <img src="./public/Logo-Principal.png" alt="k new logo" />
              </div>
          </a>
              <div className='h-full w-auto my-3 '>
                <p className=''> Creado en Febrero del 2024 por Pablo Vukovich</p>
              </div>
        </div>
    
    </>
  )
}
