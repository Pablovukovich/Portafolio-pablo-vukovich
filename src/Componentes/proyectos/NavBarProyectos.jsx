import React from 'react'
import { useContext } from 'react';
import { Link,  useNavigate } from 'react-router-dom'
import { ContextTheme } from '../ContexTheme';
export const NavBarProyectos = ({volverArriba}) => {

    const {theme, handleCambiarTema} = useContext(ContextTheme) 

    const navigate = useNavigate();
    function scrollToTop  () {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const handleBack = () => {
        scrollToTop()
        navigate(-1); 
    };

  return (
    <>
         <nav ref={volverArriba}  className='flex item-center justify-around flex-wrap p-3 dark:bg-sexto '>
            <div >
                <button onClick={handleCambiarTema} className='  items-center text-center   transition duration-500 ml-0  p-1 lg:ml-10 '> 
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-moon hover:text-third transition duration-500 ease-in-out text-quarter dark:hover:text-quinto ">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z" />
                        </svg>
                </button>
            </div>

           <button onClick={handleBack} className='flex items-center font-roboto font-bold px-2 hover:scale-90 border-l-2 border-third dark:border-primary transition-all duration-500 text-center dark:text-primary'>
           <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left text-center w-14 h-8 dark:text-primary">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
    
            </svg>
                VOLVER

            </button>
           
        </nav>
    
    
    </>
  )
}
