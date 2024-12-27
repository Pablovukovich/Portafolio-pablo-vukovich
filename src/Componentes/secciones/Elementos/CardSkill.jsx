import React from 'react'

export const CardSkill = ({skill}) => {

    
  return (
    <>
        <>
            <div className='h-full w-[200px] m-2  flex-shrink-0 cursor-pointer flex'>
                    <div className='rounded-xl overflow-hidden relative h-[200px]'>
                        <img src={`/${skill.id}-skill.svg`} alt={skill.titulo} className='bg-cover dark:filter-dark-custom'/>
                        <span className='absolute top-3 left-4  text-xs rounded-xl  px-4  py-2 font-roboto capitalize bg-second shadow-md  dark:bg-third dark:text-primary'>
                          {skill.titulo}
                        </span>
                    </div>
            </div>           
        </>
    
    </>
  )
}
