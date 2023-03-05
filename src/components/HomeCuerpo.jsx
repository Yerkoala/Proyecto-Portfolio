import React, { forwardRef } from 'react'
import "./Style.css"
import Perfil from './images/perfil.png';
const HomeCuerpo = ({titulo},ref) => {
    return (
        <div className='homeCuerpo'>
            <h1  ref={ref} className='titulo'>{titulo}</h1>
            <div className='perfil'>
                <img className='imgPerfil' src={Perfil} alt="Imagen del perfil" />
                <p  className='perfilDefinicion'><strong>Hola Mundo!</strong> <br />Mi nombre es Yerko Serrano y soy estudiante de quinto año de la carrera de Ingeniería Civil Informática de la universidad del Bio Bio, mi perfíl de informático está más enfocado en el área del Frontend, me apasiona el desarrollo de paginas web trabajado con ReactJS, en este portfolio se encontrarán detalles de mis habilidades, algunos proyectos que he desarrollado y la forma de contacto. Saludos! </p>
            </div>
        </div>
    )
}

export default forwardRef(HomeCuerpo)