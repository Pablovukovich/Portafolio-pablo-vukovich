import React from 'react'

export const SubTitulos = ({titulo}) => {
  return (
        <>
            <div className='flex flex-col justify-center bg-third w-60 p-3  '>
                            <h1 className='text-2xl text-primary font-roboto font-bold text-center '>{titulo}</h1>
            </div>
        
        </>
  )
}
