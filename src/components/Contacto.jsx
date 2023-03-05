import React, { forwardRef } from 'react'
import "./Style.css"

const Contacto = ({ titulo }, ref) => {
  return (
    <div className='contactoPage'>
      <h1 ref={ref} className='titulo'>{titulo}</h1>
      <div className="contactoCuerpo">
        <div className="contactoCuerpoCentrado">
          <h1>Contacto Directo</h1>
          <h2><ion-icon name="mail-outline"></ion-icon>yerkoserranoc@gmail.com</h2>
          <h2><ion-icon name="logo-whatsapp"></ion-icon>+569 66640384</h2>
          <h1 >Redes</h1>
          <a href="https://www.instagram.com/yerkoala/"><h2><ion-icon name="logo-instagram"></ion-icon>@yerkoala</h2></a>
          <a href="https://twitter.com/Yerkoala"><h2><ion-icon name="logo-twitter"></ion-icon>@yerkoala</h2></a>
          <a href="https://www.linkedin.com/in/yerko-serrano/"><h2><ion-icon name="logo-linkedin"></ion-icon>Yerko Serrano</h2></a>
          <a href="https://github.com/Yerkoala?tab=repositories"><h2><ion-icon name="logo-github"></ion-icon>Yerkoala</h2></a>
        </div>
      </div>
    </div>
  )
}

export default forwardRef(Contacto)