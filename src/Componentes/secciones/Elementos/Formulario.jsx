import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { NotificacionSuccess } from './NotificacionSuccess';
import { NotificacionError } from './NotificacionError';
import fondoContacto from '../../../assets/background_contacto.png'

export const Formulario = () => {
  const form = useRef();
  //notificacion de enviado
  const [mostrarSuccess, setMostrarSuccess] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);

  // Estados para cada campo
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  //Estados de errores
  const [errorNombre, setErrorNombre] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorMensaje, setErrorMensaje] = useState(false)
  const nombreRegex = /^[a-zA-Z\s]{1,50}$/; 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const mensajeRegex = /^[a-zA-Z0-9\s.,!?¿¡'"\-()]*$/;


  //al enviar...
  const sendEmail = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!nombreRegex.test(nombre)) {
      setErrorNombre(true);
      isValid = false;
      
    } else {
      setErrorNombre(false);
    }

    if(!emailRegex.test(email)){
      setErrorEmail(true)
      isValid = false;
    } else{
      setErrorEmail(false)
    }

    if(!mensajeRegex.test(mensaje)){
      setErrorMensaje(true)
      isValid = false;
    } else{
      setErrorMensaje(false)
    }

    if (!isValid) {
      return; // Esto detiene el envío si cualquier campo es inválido
    }
    


    emailjs
      .sendForm('service_yalny3v', 'template_icnwrlh', form.current, {
        publicKey: '2KUPSW1kIBy6tv3Wc',
      })
      .then(
        () => {
          setMostrarSuccess(true);
          setMostrarError(false);

          // Limpiar los campos del formulario
          setNombre('');
          setEmail('');
          setMensaje('');

          // Ocultar la notificación de éxito después de unos segundos
          setTimeout(() => {
            setMostrarSuccess(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMostrarError(true);
          setMostrarSuccess(false);

          // Ocultar la notificación de error después de unos segundos
          setTimeout(() => {
            setMostrarError(false);
          }, 3000);
        },
      );
  };

  return (
    <>
      <div className='flex flex-col flex-1 items-center m-7 relative text-center lg:flex-row'>
        <img
          src={fondoContacto}
          alt="fondo-contacto"
          className='w-72 h-64 rounded-md lg:h-[400px] lg:w-[400px]'
        />
        <span className='absolute top-32 font-roboto font-extrabold text-3xl text-center animate-bounce lg:left-20 lg:top-40'>
          CONTACTAME
        </span>

        <div className='flex flex-col text-center shadow-2xl lg:px-32'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col p-6 items-center'>
            <input
              type="text"
              placeholder='Nombre'
              name='user_name'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className='bg-primary font-roboto my-3 placeholder-quarter font-bold w-60 p-2 outline-none shadow-sm'
            />
            {errorNombre && <span className="text-red-500 text-xs">Por favor, ingresa un nombre válido.</span>}
            <input
              type="email"
              placeholder='Email'
              name='user_email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-primary font-roboto my-3 placeholder-quarter w-60 p-2 outline-none shadow-sm'
            />
             {errorEmail && <span className="text-red-500 text-xs">Por favor, ingresa un email válido.</span>}
            <textarea
              placeholder='Mensaje'
              name='message'
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              className='bg-primary font-roboto my-3 placeholder-quarter w-60 p-2 outline-none shadow-sm resize-none'
            ></textarea>
            {errorMensaje && <span className="text-red-500 text-xs">Por favor, ingresa un mensaje válido.</span>}

            <input
              type="Submit"
              value='Enviar'
              className='bg-third w-20 my-5 text-center items-center text-primary font-roboto p-3 font-semibold hover:bg-primary hover:text-third transition-all duration-300 lg:w-32'
            />

          </form>
        </div>
      </div>
      
      {/* Renderizado condicional de notificaciones */}
      {mostrarSuccess && <NotificacionSuccess />}
      {mostrarError && <NotificacionError />}
    </>
  );
};

