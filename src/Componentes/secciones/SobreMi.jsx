import React from 'react';
import pabloImage from '../../assets/pablo-vuk.jpg';
import { SubTitulos } from './Elementos/SubTitulos';
export const SobreMi = ({sobreMiSectionRef}) => {
  return (
    <>
        <section  ref={sobreMiSectionRef} className=' flex flex-col  bg-second justify-center py-10 items-center'>
                        <SubTitulos titulo={'SOBRE MI'} />
                        <div className='flex flex-col bg-third p-5 m-5 h-max w-auto items-center rounded-tl-xl rounded-br-xl lg:flex-row lg:p-0 lg:mx-20 showAnimacion'>
                              <div className=' flex w-48 h-auto lg:w-[50%] lg:h-auto  '>
                                    <img src={pabloImage} alt="Pablo-vukovich" className='object-cover rounded-lg lg:rounded-none ' />

                              </div>

                                <div className='p-4 h-auto w-full m-4 lg:p-0 lg:m-0'>
                                <p className='max-w-md mx-auto font-light text-sm text-primary font-roboto  text-start lg:text-xl lg:max-w-3xl'> Desarrollador full stack y estudiante de Ingeniería en Informática, 
                                con una gran pasión por el desarrollo de aplicaciones móviles. Me motiva construir soluciones innovadoras y eficientes que marquen la diferencia, combinando creatividad y técnica en cada proyecto. 
                                Mi enfoque va más allá de la programación: busco destacarme en el mundo del desarrollo de apps móviles, aprovechando distintas tecnologías para crear experiencias intuitivas y atractivas para los usuarios.</p>
                                <p className='max-w-md mx-auto font-light text-sm text-primary font-roboto  text-start lg:text-xl lg:max-w-3xl'>
                                Además de mi interés en el desarrollo, tengo habilidades en herramientas de diseño, lo cual me permite cuidar cada detalle visual de mis proyectos y asegurar que la estética esté en perfecta armonía con la funcionalidad. 
                                Me considero un amante de los idiomas, lo que amplía mis perspectivas y me facilita conectar y trabajar en contextos multiculturales.
                                </p>
                                <p className='max-w-md mx-auto font-light text-sm text-primary font-roboto  text-start lg:text-xl lg:max-w-3xl'>
                                Mi portafolio refleja mi crecimiento constante en este apasionante camino, mostrando la versatilidad y el compromiso que pongo en cada desafío. ¡Te invito a conocer más sobre mí y mis proyectos
                                </p>
                                </div>
                        </div>
        </section>
    
    </>
  )
}
