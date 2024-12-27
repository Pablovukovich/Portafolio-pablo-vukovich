import React from 'react'
import reactLogo from './../../../../public/brand-react.svg'
import tailwindLogo from './../../../../public/brand-tailwind.svg'
import mongoDBLogo from './../../../../public/brand-mongodb.svg'
import nodejsLogo from './../../../../public/brand-nodejs.svg'

import { Link } from 'react-router-dom'

export const ProyectoGrid = ({proyectos}) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


  return (
    <>
     <div className='grid grid-cols-1  sm:grid-cols-3 gap-3 '>
          <div className='bg-primary col-span-1 sm:col-span-2 h-56 rounded-md hover:shadow-md showAnimacion group  relative dark:bg-sexto'>
            <div className='w-full h-full rounded-md relative overflow-hidden  '>
              <img src="/p-blog4.png" alt="blog knews" className='w-full h-full object-cover rounded-md absolute top-0 right-0 group-hover:blur-sm' />
                  <div className='absolute h-full w-full bg-third/50 flex flex-col  items-start -bottom-64 group-hover:-bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                    <h1 className='text-primary mx-5 my-3 text-2xl font-roboto font-bold'>K NEWS BLOG</h1>
                    <div className='overflow-y-scroll max-h-32 sm:overflow-hidden'>
                      <p className='text-second mx-5 my-1 text-sm'>
                        Proyecto de blog de noticias sobre el grupo Surcoreano Blackpink
                      </p>

                    </div>
                    <div className='  mx-5 text-second bottom-14 absolute flex flex-col items-start'>
                      <span className=' hidden sm:block font-roboto text-second'>Tecnologias</span>
                      <div className=' hidden sm:flex sm:flex-row justify-start'>
                        <img src={reactLogo} alt="react logo" className='w-8 h-8 mx-1' />
                        <img src={tailwindLogo} alt="react logo" className='w-8 h-8 mx-1' /> 
                        <img src={nodejsLogo} alt="react logo" className='w-8 h-8 mx-1' />
                        <img src={mongoDBLogo} alt="react logo" className='w-8 h-8 mx-1' />
                        </div> 
                      
                      </div>
                    <Link to={`/blogKnews-p/1`} onClick={scrollToTop} className='bg-primary mx-5 my-2 p-2 hover:bg-primary hover:text-second absolute bottom-0'>Ver más...</Link>

                  </div>
              

            </div>
          </div>
          <div className='bg-primary h-56  rounded-md  items-center hover:shadow-md bg-origin-border  showAnimacion group dark:bg-sexto '>
                <div className='w-full h-full rounded-md relative overflow-hidden '>
                      
                  <img src="/p-pinkterest.png" alt="blog knews" className='w-full h-full object-cover rounded-md absolute top-0 right-0 group-hover:blur-sm '/>
                  <div className='absolute h-full w-full bg-third/50 flex flex-col  items-start -bottom-64 group-hover:-bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                    <h1 className='text-primary mx-5 my-3 text-2xl font-roboto font-bold'>PINKTEREST</h1>
                    <div className='overflow-y-scroll max-h-32 scrollbar-thin scrollbar-track-second scrollbar-thumb-primary m-1 '>
                      <p className='text-second mx-5 my-1 text-sm'>
                      App inspirada en Pinterest que muestra solo imágenes de Blackpink, permitiendo explorar, guardar y compartir fotos en categorías personalizadas para fans
                      </p>

                    </div>
                    <div className='hidden sm:block mx-5 text-second'>
                    <span className=' hidden sm:block font-roboto text-second'>Tecnologias</span>
                      <div className=' hidden sm:flex sm:flex-row justify-start'>
                        <img src={reactLogo} alt="react logo" className='w-8 h-8 mx-1' />
                        <img src={tailwindLogo} alt="react logo" className='w-8 h-8 mx-1' /> 
                        <img src={nodejsLogo} alt="react logo" className='w-8 h-8 mx-1' />
                        <img src={mongoDBLogo} alt="react logo" className='w-8 h-8 mx-1' />
                        </div> 
                    </div>
                    <Link to={`/pinkterestKnews-p/2`} onClick={scrollToTop} className='bg-primary mx-5 my-2 p-2 hover:bg-primary hover:text-second'>Ver más...</Link>

                  </div>
            </div>          
          </div>
          <div className='bg-primary col-span-1 sm:col-span-3   h-56 rounded-md hover:shadow-md showAnimacion group dark:bg-sexto'>
                  <div className='w-full h-full rounded-md relative overflow-hidden '>
                      <img src="/p-random-music.png" alt="blog knews" className='w-full h-full object-cover rounded-md absolute top-0 right-0 group-hover:blur-sm '/>
                      <div className='absolute h-full w-full bg-third/50 flex flex-col  items-start -bottom-64 group-hover:-bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                        <h1 className='text-primary mx-5 my-3 text-2xl font-roboto font-bold'>PINK RANDOM MUSIC</h1>
                        <div className='    overflow-y-scroll max-h-32 sm:overflow-hidden scrollbar-thin scrollbar-track-second scrollbar-thumb-primary m-1'>
                          <p className='text-second mx-5 my-1 text-sm'>
                          App que muestra una canción aleatoria de Blackpink cada día, permitiendo a los fans descubrir y disfrutar su música diariamente
                          </p>
    
                        </div>
                        <div className='hidden sm:block mx-5 text-second'>
                          <span className=' hidden sm:block font-roboto text-second'>Tecnologias</span>
                          <div className=' hidden sm:flex sm:flex-row justify-start'>
                          <img src={reactLogo} alt="react logo" className='w-8 h-8 mx-1' />
                          <img src={tailwindLogo} alt="react logo" className='w-8 h-8 mx-1' /> 
                          <img src={nodejsLogo} alt="react logo" className='w-8 h-8 mx-1' />
                          <img src={mongoDBLogo} alt="react logo" className='w-8 h-8 mx-1' />
                          </div> 


                        </div>
                        <Link  to={'/randomMusicKnews-p/3'} className='bg-primary mx-5 my-3 p-2 hover:bg-primary hover:text-second'>Ver más...</Link>
    
                      </div>
                </div>          
          </div>
                
        </div>
    
    </>
  )
}
