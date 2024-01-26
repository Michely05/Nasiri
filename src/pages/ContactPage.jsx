import React, { useEffect, useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [blurValue, setBlurValue] = useState(0);
  const [isPageLoaded, setPageLoaded] = useState(false);
  const accessKey = import.meta.env.VITE_API_KEY;
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      setBlurValue((prevBlur) => {
        if (prevBlur < 3) {
          return prevBlur + 1;
        } else {
          clearInterval(interval);
          setPageLoaded(true); 
          return prevBlur;
        }
      });
    }, 100);

    
    return () => clearInterval(interval);
  }, []); 

  return (
    <section className='contact'>
      <h1 className='title'>CONTACT US</h1>
      <div className={`blurContact ${isPageLoaded ? 'appear' : ''}`} style={{ backdropFilter: `blur(${blurValue}px)` }}>
        <form action="https://api.web3forms.com/submit" method="POST" className='contactForm'>
          <input type="hidden" name="access_key" value={accessKey}/>
            <input type="text" name='name' placeholder='Introduce tu nombre' className='contactInputs' required />
            <input type="email" name='email' placeholder='Introduce tu email' className='contactInputs' required />
            <textarea name="message" placeholder='Escribe tu mensaje' className='contactImputs' required></textarea>
            <button type='submit'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactPage;






