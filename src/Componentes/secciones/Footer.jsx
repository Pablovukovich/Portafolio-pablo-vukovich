import React from 'react'

export const Footer = () => {

  

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <>
        <footer className='flex flex-col relative bg-second justify-center py-20 items-center border-t-2 border-third border-opacity-15 dark:bg-sexto dark:border-black  ' >
                <h3 className='font-roboto font-semibold text-2xl dark:text-primary'>Pablo Vukovich</h3>
                <button className=' my-3 p-2 rounded-md  border-primary hover:bg-third hover:text-primary transition duration-0 hover:duration-500  dark:bg-third dark:text-primary dark:hover:text-third dark:hover:bg-primary'onClick={scrollToTop} >Volver Arriba </button>
                <p className='flex absolute top-56 text-xs opacity-50 text-center items-center dark:text-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-augmented-reality opacity-50  dark:text-primary">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                        <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                        <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                        <path d="M12 12.5l4 -2.5" />
                        <path d="M8 10l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5z" />
                        <path d="M8 10v4.5l4 2.5" />
                        </svg >
                    Portafolio realizado con REACT Y TAILWIND</p>
        </footer>
    </>
  )
}
