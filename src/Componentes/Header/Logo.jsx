import React from 'react'

export const Logo = () => {
  return (
    <>
        <div class=" hidden lg:grid grid-cols-3 grid-rows-3 gap-5 transform rotate-45 perspective-[600px] lg:absolute lg:w-96 lg:h-96 lg:left-[50rem] lg:-top-20   ">
        <div className="bg-second bg-opacity-50 p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] flex justify-center items-center overflow-hidden animate-[scaleUp_3s_ease-in-out_infinite]"> <img src="/4-skill.svg" alt="react-logo" className="transform rotate-[-45deg]" /></div>
            <div class="bg-second bg-opacity-50  p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] flex justify-center items-center"></div>
            <div className="bg-second bg-opacity-50 p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] 
                 flex justify-center items-center overflow-hidden animate-[scaleUp_3s_ease-in-out_infinite]"><img src="/3-skill.svg" alt="js-logo" className='  transform rotate-[-45deg]' /></div>
            <div class="bg-second bg-opacity-50  p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] flex justify-center items-center"></div>
            <div class="bg-second bg-opacity-50  p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] transition duration-300 hover:duration-700 hover:w-36 hover:h-36 flex justify-center items-center"> <img src="/logo .png" alt="logo" className='h-32  transform rotate-[-45deg] ' /> </div>
            <div class="bg-second bg-opacity-50  p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] flex justify-center items-center "></div>
            <div class="bg-second bg-opacity-50 p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] 
                 flex justify-center items-center overflow-hidden animate-[scaleUp_2s_ease-in-out_infinite]"><img src="/7-skill.svg" alt="java-logo" className='  transform rotate-[-45deg]'  /></div>
            <div class="bg-second bg-opacity-50  p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] flex justify-center items-center"></div>  
            <div class="bg-second bg-opacity-50 p-5 text-transparent shadow-[30px_30px_30px_-20px_rgba(0,0,0,0.6)] 
                flex justify-center items-center overflow-hidden animate-[scaleUp_2s_ease-in-out_infinite]"> <img src="/8-skill.svg" alt="postgre-logo" className='  transform rotate-[-45deg]' /></div>
</div>
    </>
  )
}
