import React from 'react'
import { NavBar } from './NavBar'
import { Logo } from './Logo'
import resume from '../../assets/cv-pablo-vukovich.pdf'

export const Header = ({sobreMiSectionRef, skillsSectionRef, proyectosSectionRef, contactoSectionRef, volverArriba }) => {
  return (
     <>
      <header   className=' flex  flex-col bg-gradient-to-b from-primary to-second h-screen  lg:relative  dark:bg-gradient-to-b dark:from-third dark:to-sexto'>
        
         
        <NavBar 
            sobreMiSectionRef={sobreMiSectionRef}
            skillsSectionRef={skillsSectionRef}
            proyectosSectionRef={proyectosSectionRef}
            contactoSectionRef={contactoSectionRef}
            volverArriba={volverArriba}
            
        />
        <div className='m-auto text-center items-center h-auto p-14 text-wrap lg:flex lg:flex-col lg:absolute lg:top-64 lg:left-44 '>
            <h1 className='font-bold text-4xl font-roboto text-third lg:text-6xl dark:text-primary'>PABLO VUKOVICH</h1>
            <p className='-tracking-tighter text-2xl uppercase font-robotoMono lg:text-4xl dark:text-primary  '>DEVELOPER</p>
             <Logo/>   
          <div className='flex justify-around  my-3 p-5 lg:justify-between  '>

          <a href="https://www.linkedin.com/in/pablo-vukovich/"   className='hover:animate-bounce transition-all duration-700 ease-in  lg:mx-5 ' target="_blank">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className=" lg:w-8 lg:h-8 icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin transition-all duration-500 hover:w-15 hover:h-15 dark:text-second ">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                        <path d="M8 11l0 5" />
                        <path d="M8 8l0 .01" />
                        <path d="M12 16l0 -5" />
                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                      </svg>
          </a>

          <a href="https://github.com/Pablovukovich" className='hover:animate-bounce lg:mx-5 ' target='_blank'>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="  lg:w-8 lg:h-8 icon icon-tabler icons-tabler-outline icon-tabler-brand-github transition-all duration-500 hover:w-9 hover:h-9  dark:text-second">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
          </a>

          <a href={resume} download='cv-pablo-vukovich' className='hover:animate-bounce lg:mx-5 '>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className=" lg:w-8 lg:h-8 icon icon-tabler icons-tabler-outline icon-tabler-arrow-bar-to-down transition-all duration-500 hover:w-9 hover:h-9  dark:text-second">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20l16 0" />
            <path d="M12 14l0 -10" />
            <path d="M12 14l4 -4" />
            <path d="M12 14l-4 -4" />
          </svg>

          </a>

          </div>

        </div>

        

      </header>
     
     </>
  )
}
