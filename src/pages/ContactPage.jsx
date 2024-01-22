import React, { useEffect, useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [blurValue, setBlurValue] = useState(0);
  const [isPageLoaded, setPageLoaded] = useState(false);
  let interval;

  useEffect(() => {
    // Simulación de carga de página
    interval = setInterval(() => {
      setBlurValue((prevBlur) => {
        if (prevBlur < 3) {
          return prevBlur + 1;
        } else {
          clearInterval(interval);
          setPageLoaded(true); // Marcar la página como cargada al finalizar la simulación
          return prevBlur;
        }
      });
    }, 100);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []); // La dependencia vacía asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <section className='contact'>
      <h1 className='title'>CONTACT US</h1>
      <div className={`blurContact ${isPageLoaded ? 'appear' : ''}`} style={{ backdropFilter: `blur(${blurValue}px)` }}>
        <form action="https://api.web3forms.com/submit" method="POST" className='contactForm'>
          <input type="hidden" name="access_key" value="94b55998-ab62-4ad3-b860-51ddfba20f86"/>
            <input type="text" name='name' placeholder='Your Name' className='contactInputs' required />
            <input type="email" name='email' placeholder='Your Email' className='contactInputs' required />
            <textarea name="message" placeholder='Your Message' className='contactImputs' required></textarea>
            <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;






