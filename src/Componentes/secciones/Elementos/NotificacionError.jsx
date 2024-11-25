import React from 'react'

export const NotificacionError = () => {
  return (
    <>
             <div className=' flex w-60 h-15 bg-primary  m-5 py-5 px-2 items-center shadow-lg z-10  bottom-0 right-0 mb-5 mr-5 fixed'>
             <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-face-id-error w-12 h-12">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                    <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                    <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                    <path d="M9 10h.01" />
                    <path d="M15 10h.01" />
                    <path d="M9.5 15.05a3.5 3.5 0 0 1 5 0" />
            </svg>

                <p className='text-center ml-3 text-base text-third font-semibold '>Ups! Algo salio mal...Intentelo mas tarde</p>
            </div>
    
    </>
  )
}
