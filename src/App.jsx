
import './App.css'
import { Header } from './Componentes/Header/Header'
import { SobreMi } from './Componentes/secciones/SobreMi'
import { Skills } from './Componentes/secciones/Skills'
import { Proyectos } from './Componentes/secciones/Proyectos'
import { Contacto } from './Componentes/secciones/Contacto'
import { Footer } from './Componentes/secciones/Footer'
import { useRef } from 'react'
import { Routes, Route, } from 'react-router-dom'
import { PinkterestKnews } from './Componentes/proyectos/PinkterestKnews'
import { RandomMusic } from './Componentes/proyectos/RandomMusic'
import { PlantillaProyecto } from './Componentes/proyectos/PlantillaProyecto'
import { Knews } from './Componentes/proyectos/Knews'
import { proyectos } from './data/proyectos.js';
function App() {

  const sobreMiSectionRef = useRef();
  const skillsSectionRef = useRef();
  const proyectosSectionRef = useRef();
  const contactoSectionRef = useRef();
  const volverArriba = useRef();


  return (
    <>
    
    <Routes>
     
        {/* Ruta para la página principal */}
        <Route 
          path="/" 
          element={
            <>
              <Header 
                sobreMiSectionRef={sobreMiSectionRef}
                skillsSectionRef={skillsSectionRef}
                proyectosSectionRef={proyectosSectionRef}
                contactoSectionRef={contactoSectionRef}
                volverArriba={volverArriba}
                  />
              <SobreMi sobreMiSectionRef={sobreMiSectionRef} />
              <Skills skillsSectionRef={skillsSectionRef} />
              <Proyectos proyectosSectionRef={proyectosSectionRef} proyectos={proyectos} />
              <Contacto contactoSectionRef={contactoSectionRef} />
            </>
          } 
        />
        {/* Rutas para otros proyectos */}
        <Route path="/blogKnews-p/:id" element={<PlantillaProyecto/>} />
        <Route path="/pinkterestKnews-p/:id" element={<PlantillaProyecto/>} />
        <Route path="/randomMusicKnews-p/:id" element={<PlantillaProyecto/>} />
        <Route path="/*" element={<PlantillaProyecto/>}/>
        <Route path='knews-info' element={<Knews/>} />
      

      </Routes>
      {/* Footer siempre visible */}
      <Footer volverArriba={volverArriba} />
      
    
    </>
    
    
      
  )
}

export default App
