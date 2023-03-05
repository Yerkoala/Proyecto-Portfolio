import React from 'react'
import "./Style.css"
import { Icon } from '@material-ui/core';

const Header = ({handleClickProyectos, handleClickContacto, handleClickSkills, handleClickHome}) => {
    return (
        <div className='header'>
            <h1 className='nombre'>Yerko Serrano</h1>
            <div className='header-info'>
                <p onClick={()=>handleClickHome()} className='botonHeader'>Home</p>
                <p onClick={()=>handleClickProyectos()} className='botonHeader'>Proyectos</p>
                <p onClick={()=>handleClickSkills()} className='botonHeader'>Skills</p>
                <p onClick={()=>handleClickContacto()} className='botonHeader'>Contacto</p>
                <a href="http://google.cl"><button className='curriculum'>Descargar CV</button></a>
            </div>
        </div>
    )
}

export default Header