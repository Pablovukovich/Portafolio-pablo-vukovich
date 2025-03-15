import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";

export const ProyectoGrid = ({ proyectos }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
      {proyectos.map((proyecto, index) => (
        <div
          key={index}
          className="bg-primary col-span-1 sm:col-span-2 h-56 rounded-md hover:shadow-md showAnimacion group relative dark:bg-sexto"
        >
          <div className="w-full h-full rounded-md relative overflow-hidden">
            <img
              src={proyecto.imagen.src}
              alt={proyecto.titulo}
              className="w-full h-full object-cover rounded-md absolute top-0 right-0 group-hover:blur-sm"
            />
            <div className="absolute h-full w-full bg-third/50 flex flex-col items-start -bottom-64 group-hover:-bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
           <div className="flex flex-col sm:flex-row items-center justify-center text-center">
            
            <h1 className="text-primary mx-5 my-1 text-2xl font-roboto font-bold">
              {proyecto.titulo}
            </h1>
            <p className="text-white my-1 font-light text-sm">Estado:  {proyecto.estado.state_project} </p>
            <proyecto.estado.icon_state className={`mx-2 ${proyecto.estado.color}`}/>
           </div>
              <div className="overflow-y-scroll max-h-20 sm:overflow-y-hidden"> 
                <p className="text-second mx-5  text-sm">
                  {proyecto.descripcion}
                </p>
              </div>
              <div className="mx-5 text-second bottom-14 absolute flex flex-col items-start">
                
                <div className="hidden sm:flex sm:flex-row justify-start mt-4">
                  {proyecto.skills.map((skill, i) => (
                    <skill.icon
                      key={i}
                      className={`w-8 h-8 mx-1 ${
                        skill.iconColor ? skill.iconColor : "text-second"
                      }`}
                      title={skill.name}
                    />
                  ))}
                </div>
              </div >
              <Link
                to={proyecto.link}
                onClick={scrollToTop}
                className="bg-primary mx-5 my-2 p-2 hover:bg-primary hover:text-second absolute bottom-0 "
              >
                Ver más...
              </Link>
             
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
  
};
