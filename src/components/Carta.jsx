import React, { useState } from 'react'
import ImagenProyecto from './ImagenProyecto'
import "./Style.css"

const Carta = ({ title, descripcion, imagen, alt, repositorio, demo, noDisponible }) => {
    const [abierto, setAbierto] = useState(false)

    const cerrarImagenModal = () => {
        setAbierto(false)
    }

    return (
        <div>
            <div className='carta'>
                <img src={imagen} alt={alt} onClick={() => { setAbierto(true) }} title="Expandir imagen" />
                <h2>{title}</h2>
                <p>{descripcion}</p>
                <div className='cartaBotones'>
                    <a href={repositorio} target='_blank'><button className='bottonRepositorio'>Repositorio</button></a>
                    <a href={demo} target='_blank'><button onClick={noDisponible} className='bottonRepositorio'>Demo</button></a>
                </div>
            </div>
            <ImagenProyecto isOpen={abierto} cerrarImagenModal={cerrarImagenModal} imagenProyecto={imagen} alt={alt} />
        </div>
    )
}

export default Carta