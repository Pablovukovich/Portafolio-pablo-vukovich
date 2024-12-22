import React from 'react'
import skill4 from './../../../public/4-skill.svg'
import skill3 from './../../../public/3-skill.svg'
import skill7 from './../../../public/7-skill.svg'
import skill8 from './../../../public/8-skill.svg'

export const Logo = () => {
  return (
    <>
        <div class=" hidden lg:grid grid-cols-3 grid-rows-3 gap-5 transform rotate-45 perspective-[600px] lg:absolute lg:w-96 lg:h-96 lg:left-[50rem] lg:-top-20   ">
        <div className="bg-second bg-opacity-50 p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] flex justify-center items-center overflow-hidden animate-[scaleUp_3s_ease-in-out_infinite]"> <img src={skill4} alt="react-logo" className="transform rotate-[-45deg]" /></div>
            <div class="bg-second bg-opacity-50  p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] flex justify-center items-center"></div>
            <div className="bg-second bg-opacity-50 p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] 
                 flex justify-center items-center overflow-hidden animate-[scaleUp_3s_ease-in-out_infinite]"><img src={skill3} alt="js-logo" className='  transform rotate-[-45deg]' /></div>
            <div class="bg-second bg-opacity-50  p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] flex justify-center items-center"></div>
            <div class="bg-second bg-opacity-50  p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] transition duration-300 hover:duration-700 hover:w-36 hover:h-36 flex justify-center items-center"> <img src="/logo .png" alt="logo" className='h-32  transform rotate-[-45deg] ' /> </div>
            <div class="bg-second bg-opacity-50  p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] flex justify-center items-center "></div>
            <div class="bg-second bg-opacity-50 p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] 
                 flex justify-center items-center overflow-hidden animate-[scaleUp_2s_ease-in-out_infinite]"><img src={skill7} alt="java-logo" className='  transform rotate-[-45deg]'  /></div>
            <div class="bg-second bg-opacity-50  p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] flex justify-center items-center"></div>  
            <div class="bg-second bg-opacity-50 p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] 
                flex justify-center items-center overflow-hidden animate-[scaleUp_2s_ease-in-out_infinite]"> <img src={skill8} alt="postgre-logo" className='  transform rotate-[-45deg]' /></div>
</div>
    </>
  )
}
