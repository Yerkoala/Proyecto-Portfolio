import React from 'react'

const ImagenProyecto = ({isOpen,cerrarImagenModal,imagenProyecto,alt}) => {
   
    const noCerrar=(e)=>{
        e.stopPropagation();
    }

  return (
    <div className={isOpen?'imagenProyectoAbierto':'imagenProyecto'} onClick={cerrarImagenModal}>
        <div className='imagenModal' onClick={noCerrar}>
            <img src={imagenProyecto} alt={alt} />
            <button onClick={cerrarImagenModal}>Cerrar</button>
        </div>

    </div>
  )
}

export default ImagenProyecto