import React from 'react'
import { Link } from 'react-router-dom'
export const ErrorNotFound = () => {
  return (
      <>
      <div className='flex flex-row relative'>
          <div className='h-screen w-[70%] bg-primary flex flex-col '>
            <div className='flex flex-row px-20 py-10 items-center'>
                <h1 className='font-bold font-roboto text-9xl'>404 </h1>

                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mood-sad mx-10 h-20 w-20 ">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M9 10l.01 0" />
                    <path d="M15 10l.01 0" />
                    <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
                  </svg>
                  
            </div>
            <div className='px-20 items-center'>
                <p className='text-5xl'>UPS ! pagina no encontrada </p>
            </div>
          </div>
          
          <div className='bg-primary flex w-[30%] items-center '>
            <Link to={'/'}>
                <img src="./public/logo .png" alt="logo" className='  w-[500px] h-[600px] hover:scale-75 transition-all duration-500 ' />
            </Link>
          </div>
              <Link to={"/"} className='bg-third w-32 h-16 absolute top-[60%] right-[50%] text-center items-center flex justify-center font-roboto font-bold text-primary hover:bg-quinto  transition-all duration-500'>Volver al Inicio</Link>  
          
      </div>
      
      </>
  )
}
