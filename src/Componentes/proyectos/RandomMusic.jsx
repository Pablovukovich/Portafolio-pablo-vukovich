import React from 'react'
import { NavBarProyectos } from './NavBarProyectos'
import { Link } from 'react-router-dom'

export const RandomMusic = ({proyecto}) => {
  return (
    <>
         <NavBarProyectos/>
        <section   className='flex flex-col items-center sm:items-center sm:flex-row justify-center h-auto sm:h-screen dark:bg-sexto '>
        <div className="my-5 mx-14 w-[80%] h-full sm:w-[40%] sm:h-[95%] bg-quarter shadow-2xl relative flex justify-center items-center group  dark:bg-third">
          <img src={proyecto.imagen.src} alt={proyecto.imagen.alt} className="object-cover w-full h-full group-hover:blur-sm transition-all duration-700" />
          <a href="#" className="absolute w-32 h-14 z-10 bg-quinto flex justify-center items-center text-second font-roboto font-bold hover:bg-primary hover:text-third transition-all duration-500  ">VER PROYECTO</a>
        </div>
            <div className='bg-quarter dark:bg-third w-[80%] h-[90%] sm:w-[60%]  mx-10 shadow-2xl relative overflow-y-auto my-2 scrollbar-thin scrollbar-thumb-second scrollbar-track-primary '>
                <div className='px-5 py-2  border-b border-third   w-[50%] '>
                  <h1 className='font-roboto font-bold text-3xl text-third dark:text-primary'> {proyecto.titulo}</h1>
                </div>
                <div className='px-5 py-2  my-2 '>
                  <h2 className='font-roboto font-normal dark:text-primary'>DESCRIPCION</h2>
                  <p className='dark:text-quarter'>{proyecto.descripcion}</p>
                  <br />
                  <span className='font-semibold text-lg dark:text-primary'>Características Principales</span>
                  <p className='dark:text-quarter'><span className='font-medium  dark:text-primary'>Exploración Aleatoria de Canciones:</span> Con un solo clic, la app selecciona y reproduce una canción al azar de un extenso catálogo, permitiendo a los usuarios descubrir música de diferentes géneros, épocas y estilos.<br/>
                    <span className='font-medium dark:text-primary'>Detalles de Canción y Artista:</span> Cada canción incluye información detallada sobre el título, artista, álbum, y otros detalles relevantes. Los usuarios pueden conocer más sobre la canción y acceder a enlaces para escucharla en plataformas de streaming.<br/>
                     
                    </p>
                    <br />
                    <span className='font-semibold text-lg dark:text-primary'>Tecnologías Utilizadas</span>
                  <p className='dark:text-quarter'><span className='font-medium dark:text-primary'>Frontend:</span> Desarrollado con React y estilizado con Tailwind CSS para garantizar una interfaz intuitiva y una experiencia de usuario fluida. <br />
                  <span className='font-medium dark:text-primary' >Backend:</span> Utiliza Node.js y MongoDB para un backend escalable y eficiente, permitiendo una administración rápida y segura de los datos, tales como publicaciones, comentarios y perfiles de usuario</p>
                  <br/>
                  <span className='font-semibold text-lg dark:text-primary'>Objetivo</span>
                  <p className='dark:text-quarter'>El proyecto Random Music está diseñado para facilitar el descubrimiento musical en un entorno intuitivo y libre de esfuerzo, ideal para los amantes de la música y quienes buscan expandir sus gustos musicales. Este proyecto representa una oportunidad para mejorar habilidades en desarrollo full stack, combinando React y Tailwind en el frontend con Node.js y MongoDB en el backend, y centrándose en crear una experiencia de usuario fluida y atractiva.</p>
                </div>
                <div className='w-[50%] h-16 px-5 py-2'>
                  <h3 className='dark:text-primary'>Tecnologias</h3>
                  <div className='flex'>
                  {proyecto.skills.map((skill, index) => (
                    <img key={index} src={skill.src} alt={skill.alt} className='w-16 h-16 my-1  '  />
                  ))}
                  </div>
                </div>
                <div className='w-[50%] h-16 px-5 py-2  my-8'>
                  <h3 className='dark:text-primary'>Repositorio</h3>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github w-14 h-14 hover:scale-125 transition-all duration-300 text-quinto">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </div>
                </div>

               
               <Link to={'/knews-info'} className='text-quinto hover:text-black  '>
               
                <div className='flex flex-row  my-2 bottom-0 left-[60%] sm:left-0    '>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-help w-5 h-5">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 17l0 .01" />
                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                  </svg>
                  <p className='mx-1 text-sm text-third dark:text-quarter '>¿Que es knews?</p>
                </div>
               
               </Link>
            </div>

        </section>
    
    </>
  )
}
