import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import imagen1 from "../../public/p-blog4.png";
import imagen2 from "../../public/p-pinkterest.png";
import imagen3 from "../../public/p-random-music.png";
export const proyectos = [
  {
    id: 1,
    imagen: { src: imagen1, alt: "Blog-knews" },
    titulo: "BLOG KNEWS",
    descripcion: `Knews es un blog de noticias dedicado a las últimas novedades sobre Blackpink, sus integrantes, eventos, lanzamientos, y otros temas relevantes al universo del grupo.`,
    skills: [
      { icon: FaReact , name: "React" },
      { icon: SiTailwindcss , name: "Tailwind CSS" },
      { icon: FaNodeJs , name: "Node.js" },
      { icon: SiMongodb , name: "MongoDB" },
    ],
    github: "#",
    link: "/blogKnews-p/1"
  },
  {
    id: 2,
    imagen: { src: imagen2, alt: "Pinkterest" },
    titulo: "PINKTEREST",
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
