import React from 'react';
import { SubTitulos } from './Elementos/SubTitulos';
import ContactoCard from './Elementos/ContactoCard';

export const Contacto = ({contactoSectionRef}) => {
  return (
    <>
         <section ref={contactoSectionRef} className='flex flex-col  bg-second justify-center py-14 items-center dark:bg-sexto' >
                <SubTitulos titulo='Contacto'/>
                  <ContactoCard/>
                
         </section>
    
    </>
  )
}
