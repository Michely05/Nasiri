import React, { useEffect, useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [blurValue, setBlurValue] = useState(0);
  let interval;

  useEffect(() => {
    // Simulación de carga de página
    interval = setInterval(() => {
      setBlurValue((prevBlur) => {
        if (prevBlur < 3) {
          return prevBlur + 1;
        } else {
          clearInterval(interval);
          return prevBlur;
        }
      });
    }, 50);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []); // La dependencia vacía asegura que el efecto se ejecute solo una vez al montar el componente

  const handleAnimationStart = () => {
    const formContainer = document.querySelector('.blurContact');
    formContainer.classList.add('appear');
  };

  return (
    <section className='contact'>
      <div className={`blurContact`} style={{ backdropFilter: `blur(${blurValue}px)` }} onAnimationStart={handleAnimationStart}>
        <form action="" className='contactForm'>
          <input type="text" name='name' placeholder='Your Name' className='contactInputs' required/>
          <input type="email" name='email' placeholder='Your Email' className='contactInputs' required/>
          <textarea name="message" placeholder='Your Message' className='contactImputs' required></textarea>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;



