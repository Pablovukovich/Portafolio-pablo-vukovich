import ReactLogo from '../../public/brand-react.svg'
import Tailwind from '../../public/brand-tailwind.svg'
import Nodejs from '../../public/brand-nodejs.svg'
import Mongodb from '../../public/brand-mongodb.svg'
import Imagen1 from '../../public/p-blog4.png'
import imagen2 from '../../public/p-pinkterest.png'
import imagen3 from '../../public/p-random-music.png'

export const proyectos = [
    {
      id: 1,
      imagen: {src: Imagen1, alt:'Blog-knews'},
      titulo: 'BLOG KNEWS',
      descripcion: `Knews es un blog de noticias dedicado a las últimas novedades sobre Blackpink, sus integrantes, eventos, lanzamientos, y otros temas relevantes al universo del grupo. Este proyecto permite a los usuarios mantenerse informados y conectados con la comunidad de fans. Está desarrollado con React para una interfaz de usuario interactiva, Tailwind CSS para un diseño estilizado y adaptable, Node.js para el backend y MongoDB para almacenar de manera eficiente las noticias y comentarios.`,
      skills: [
        { src: ReactLogo, alt: 'React Logo'},
        { src: Tailwind, alt: 'Tailwind Logo' },
        { src: Nodejs, alt: 'Nodejs Logo' },
        { src: Mongodb, alt: 'Mongodb Logo' }
      ],
      github: '#'
    },
    {
      id: 2,
      imagen: {src: imagen2, alt:'Pinkterest'},
      titulo: 'PINKTEREST',
      descripcion: 'Este proyecto es una aplicación web inspirada en Pinterest, enfocada exclusivamente en ofrecer una galería visual de imágenes de Blackpink. El objetivo es crear una experiencia inmersiva para los fans, donde puedan explorar, guardar y organizar sus imágenes favoritas de la banda en una interfaz intuitiva y atractiva.',
      skills: [
        { src: ReactLogo, alt: 'React Logo' },
        { src: Tailwind, alt: 'Tailwind Logo' },
        { src: Nodejs, alt: 'Nodejs Logo' },
        { src: Mongodb, alt: 'Mongodb Logo' }
      ],
      github: '#'
    },
    {
      id: 3,
      imagen: {src: imagen3, alt:'RANDOM MUSIC'},
      titulo: 'RANDOM MUSIC',
      descripcion: 'Random Music es una aplicación web creada para descubrir música de manera aleatoria y emocionante. Ideal para aquellos que buscan ampliar sus gustos musicales o simplemente encontrar canciones nuevas sin tener que buscar manualmente. Con solo un clic, los usuarios pueden descubrir una nueva canción o artista y sumergirse en una experiencia auditiva sin límites. Cada selección es aleatoria, lo que añade un factor sorpresa y hace que el descubrimiento de música sea una experiencia única.',
      skills: [
        { src: ReactLogo, alt: 'React Logo' },
        { src: Tailwind, alt: 'Tailwind Logo' },
        { src: Nodejs, alt: 'Nodejs Logo' },
        { src: Mongodb, alt: 'Mongodb Logo' }
      ],
      github: '#'
    },
  ];