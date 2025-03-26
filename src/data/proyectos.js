import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import imagen1 from "../../public/p-blog4.png";
import imagen2 from "../../public/p-pinkterest.png";
import imagen3 from "../../public/p-random-music.png";
import { FaCircleMinus } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
export const proyectos = [
  {
    id: 1,
    imagen: { src: imagen1, alt: "Blog-knews" },
    titulo: "BLOG KNEWS",
    estado: {
      state_project: "en desarrollo",
      icon_state: FaCircleMinus,
      color: "text-yellow-500"
    },
    descripcion: `Knews es un blog de noticias dedicado a las últimas novedades sobre Blackpink, sus integrantes, eventos, lanzamientos, y otros temas relevantes al universo del grupo.`,
    skills: [
      { icon: RiNextjsFill , name: "Nextjs" },
      { icon: SiTailwindcss , name: "Tailwind CSS" },
      { icon: FaNodeJs , name: "Node.js" },
      { icon: SiMongodb , name: "MongoDB" },
      { icon: SiExpress , name: "Express" }

    ],
    github: "https://github.com/Pablovukovich/blog-knews",
    link: "/blogKnews-p/1"
  },
  {
    id: 2,
    imagen: { src: imagen2, alt: "Pinkterest" },
    titulo: "PINKTEREST",
    estado: {
      state_project: "no comenzado",
      icon_state: FaCircleMinus,
      color: "text-gray-500"
    },
    descripcion: "Este proyecto es una aplicación web inspirada en Pinterest, enfocada exclusivamente en ofrecer una galería visual de imágenes de Blackpink.",
    skills: [
      { icon: FaReact , name: "React" },
      { icon: SiTailwindcss , name: "Tailwind CSS" },
      { icon: FaNodeJs , name: "Node.js" },
      { icon: SiMongodb , name: "MongoDB" },
    ],
    github: "#",
    link: "/pinkterestKnews-p/2"
    
  },
  {
    id: 3,
    imagen: { src: imagen3, alt: "Random Music" },
    titulo: "RANDOM MUSIC",
    estado: {
      state_project: "no comenzado",
      icon_state: FaCircleMinus,
      color: "text-gray-500"
    },
    descripcion: "Random Music es una aplicación web creada para descubrir música de manera aleatoria y emocionante. Ideal para aquellos que buscan ampliar sus gustos musicales o simplemente encontrar canciones nuevas sin tener que buscar manualmente.",
    skills: [
      { icon: FaReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: FaNodeJs, name: "Node.js" },
      { icon: SiMongodb, name: "MongoDB" },
    ],
    github: "#",
    link: "/randomMusicKnews-p/3"
  },
];
