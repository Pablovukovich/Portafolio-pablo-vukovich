import React, { useState, useEffect } from 'react'
import { useContext } from 'react';
import { ContextTheme } from '../ContexTheme';//importar el contexto 


export const NavBar = ({sobreMiSectionRef, skillsSectionRef, proyectosSectionRef, contactoSectionRef, volverArriba}) => {

    const [viewMenu, setViewMenu] = useState(false);
    const {theme, handleCambiarTema} = useContext(ContextTheme)


    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      };

    const handleViewMenu = ()=>{
        setViewMenu(!viewMenu);
    };

  return (
    <>
        <nav ref={volverArriba}  className='flex item-center justify-around flex-wrap p-3 z-10  '>
            <div >
                <button onClick={handleCambiarTema}  className='  items-center text-center border  transition duration-500 ml-0 rounded-2xl p-1 lg:ml-10'> 
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-moon hover:text-third transition duration-500 ease-in-out text-quarter dark:hover:text-quinto ">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
                        </svg>
                </button>
            </div>

            <div className='flex lg:hidden text-center items-center '> 
                <button onClick={handleViewMenu}>
                    
                   {
                    viewMenu ?(
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x dark:text-primary">
                         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                         <path d="M18 6l-12 12" />
                         <path d="M6 6l12 12" />
                    </svg>   
                    ):(
                        
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2 dark:text-primary">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                    </svg>

                    )
                   } 	
                </button>
            </div>
            <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto relative ${viewMenu ? 'block' : 'hidden'} lg:block`}>
                <ul className='bg-quarter items-center w-full lg:flex block p-3 absolute shadow-md sm:bg-transparent sm:shadow-none lg:justify-end lg:pr-32  '>
                <li className='m-3 border-third dark:border-primary hover:border-b-2 transition-all duration-100 ease-out p-1 dark:text-primary'><button onClick={() => scrollToSection(sobreMiSectionRef)}>Sobre Mi</button></li>
                    <li className='m-3 border-third dark:border-primary  hover:border-b-2 transition-all duration-100 ease-out p-1 dark:text-primary'><button onClick={() => scrollToSection(skillsSectionRef)}>Skills</button></li>
                    <li className='m-3 border-third dark:border-primary  hover:border-b-2 transition-all duration-100 ease-out p-1 dark:text-primary'><button onClick={() => scrollToSection(proyectosSectionRef)}>Proyectos</button></li>
                    <li className='m-3 border-third dark:border-primary hover:border-b-2 transition-all duration-100 ease-out p-1 dark:text-primary'><button onClick={() => scrollToSection(contactoSectionRef)}>Contacto</button></li>
                </ul>
            </div>
        </nav>
            
    
    </>
  )
}
