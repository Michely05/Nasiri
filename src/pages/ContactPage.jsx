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

  return (
    <section className='contact'>
      <div className='blurContact' style={{ backdropFilter: `blur(${blurValue}px)` }}>
        {/* Contenido de tu página */}
      </div>
    </section>
  );
}

export default ContactPage;
3
