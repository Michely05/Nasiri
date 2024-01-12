import React from 'react'
import './ContactPage.css'

function ContactPage() {
  return (
    <section className='contact'>
      <div className='blurContact'>
      <div className='titleContainer'>
        <h2 className='title'>CONTACT ME</h2>
      </div>
      <div className='paragraphContainer'>
        <p className='paragraph'>Booking: <br/>
          <a className='emailLink' href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvnntPFjPwPpRjWsjTrXgpdmLwpQNVJdVrtNSjpXJPRWnqhGKRWqTPSPPnbzMszjkdCSGb' target='_blank'>rich@midnightmango.co.uk</a>
        </p>
      </div>
      </div>
    </section>
  )
}

export default ContactPage;