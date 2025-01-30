import React from 'react'
import { SubTitulos } from './Elementos/SubTitulos'

import SkillsGrid from './Elementos/SkillsGrid'


export const Skills = ({skillsSectionRef}) => {
  return (
        <>
            <section ref={skillsSectionRef} className=' flex flex-col  bg-second justify-center py-20 items-center h-auto dark:bg-sexto '> 
                            <SubTitulos titulo='Skills' />  
                                  
                                    <SkillsGrid/> 
            </section>
        
        </>
  )
}
