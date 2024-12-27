import React from 'react'
import { SubTitulos } from './Elementos/SubTitulos'
import { ProyectoGrid } from './Elementos/ProyectoGrid'
export const Proyectos = ({proyectosSectionRef, proyectos}) => {
  return (
    <>
            <section ref={proyectosSectionRef} className='flex flex-col  bg-second justify-center py-20 items-center dark:bg-sexto'>
                     <SubTitulos titulo='Proyectos'/>
                     <div className='my-6 w-[50%]'>
                        <ProyectoGrid proyectos={proyectos}/>

                     </div>

            </section>

    
    </>
  )
}
