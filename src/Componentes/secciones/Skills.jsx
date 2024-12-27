import React from 'react'
import { SubTitulos } from './Elementos/SubTitulos'
import { Carrousel } from './Elementos/Carrousel'


export const Skills = ({skillsSectionRef}) => {
  return (
        <>
            <section ref={skillsSectionRef} className=' flex flex-col  bg-second justify-center py-20 items-center dark:bg-sexto '> 
                            <SubTitulos titulo='Skills' />  
                                  <Carrousel/>     
            </section>
        
        </>
  )
}
