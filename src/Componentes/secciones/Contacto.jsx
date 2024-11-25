import React from 'react';
import { SubTitulos } from './Elementos/SubTitulos';
import { Formulario } from './Elementos/Formulario';
import { NotificacionSuccess } from './Elementos/NotificacionSuccess';

export const Contacto = ({contactoSectionRef}) => {
  return (
    <>
         <section ref={contactoSectionRef} className='flex flex-col  bg-second justify-center py-14 items-center' >
                <SubTitulos titulo='Contacto'/>
                  <Formulario/> 
                
         </section>
    
    </>
  )
}
