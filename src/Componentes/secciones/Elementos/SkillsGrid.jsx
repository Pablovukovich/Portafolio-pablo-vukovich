import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaDatabase, FaFigma, FaGitAlt  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import SkillCard from "./SkillCard";
const SkillsGrid = () => {
  return (
    <div className="min-h-auto  text-[#FCDDE4] py-10">
      

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Frontend Skills */}
        <div className="p-6 bg-[#EECFD7] rounded-2xl">
          <h2 className="text-xl font-bold text-[#170C10] mb-4">Frontend</h2>
          <div className="grid grid-cols-3 gap-4">
            <SkillCard name="HTML" color="#DD9FAF" icon={<FaHtml5 />} />
            <SkillCard name="CSS" color="#DD9FAF" icon={<FaCss3Alt />} />
            <SkillCard name="JavaScript" color="#DD9FAF" icon={<FaJsSquare />} />
            <SkillCard name="React" color="#DD9FAF" icon={<FaReact />} />
            <SkillCard name="Tailwind" color="#DD9FAF" icon={<RiTailwindCssFill />} />
          </div>
        </div>

        {/* Backend Skills */}
        <div className="p-6 bg-[#EECFD7] rounded-2xl">
          <h2 className="text-xl font-bold text-[#170C10] mb-4">Backend</h2>
          <div className="grid grid-cols-3 gap-4">
            <SkillCard name="Node.js" color="#8E4256" icon={<FaNodeJs />} />
            <SkillCard name="Express" color="#8E4256" icon={<FaNodeJs />} />
            <SkillCard name="MongoDB" color="#8E4256" icon={<SiMongodb />} />
            <SkillCard name="Java" color="#8E4256" icon={<FaJava />} />
            <SkillCard name="Postgres" color="#8E4256" icon={<FaDatabase />} />
          </div>
        </div>

        {/* Design Tools */}
        <div className="p-6 bg-[#EECFD7] rounded-2xl">
          <h2 className="text-xl font-bold text-[#170C10] mb-4">Diseño y herramientas</h2>
          <div className="grid grid-cols-3 gap-4">
            <SkillCard name="Figma" color="#FCDDE4" icon={<FaFigma />} />
            <SkillCard name="Photoshop" color="#FCDDE4"  icon={<DiPhotoshop />} />
            <SkillCard name="Illustrator" color="#FCDDE4" icon={<DiIllustrator />} />
            <SkillCard name="Git" color="#FCDDE4" icon={<FaGitAlt />} />
          </div>
        </div>
      </div>
    </div>
  );
};



export default SkillsGrid;
