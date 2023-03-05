import React, { forwardRef } from 'react'
import Carta from './Carta'
import "./Style.css"
import ageofempire2 from "./images/ageofempire2.png"
import breakingbad from "./images/breakingbad.png"
import ageofempire2ionic from "./images/ageofempire2ionic.png"
import crudpaginasweb from "./images/crudpaginasweb.png"
import postit from "./images/postit.png"

const Proyectos = ({ titulo }, ref) => {
    const noDisponible = () => {
        alert("Demo no Disponible")
    }

    return (
        <div className='proyectoCuerpo'>
            <h1 ref={ref} className='titulo'>{titulo}</h1>
            <p className='proyectoCuerpoParrafo'>A continuación se muestran proyectos en los que he trabajado, estos proyectos han sido evaluaciones de la universidad, proyectos que sigo desde algún video de YouTube y uno que otro proyecto desarrollado por cuenta propia.</p>
            <div className='tablaProyectos'>
                <Carta
                    alt="Imagen del proyecto Age of Empire 2"
                    repositorio=""
                    demo="https://ageofempire2de-f3504.web.app/"
                    imagen={ageofempire2} title="Age Of Empire 2 Wiki"
                    descripcion="Este proyecto muestra todas las unidades unicas del age of empire 2 DE con una breve descripción de esta más la imagen de la unidad, está conectada a una base de datos en Firebase/Firestore que yo mismo hice." />
                <Carta
                    alt="Imagen del proyecto Age of Empire 2 Ionic"
                    noDisponible={noDisponible}
                    imagen={ageofempire2ionic} title="Age Of Empire 2 Ionic"
                    descripcion="Mismo proyecto que el anterior pero adaptado para telefonos android y desarrollado en Ionic/ReactJs." />
                <Carta
                    alt="Imagen del proyecto Breaking Bad"
                    repositorio="https://github.com/Yerkoala/Breaking-Bad-Querys"
                    imagen={breakingbad}
                    title="Breaking Bad Querys"
                    descripcion="Página de consultas a una API externa (no es mía) de breaking bad, basicamente muestra frases que han dicho algunos personajes a lo largo de la serie." />
                <Carta
                    alt="Imagen del proyecto Crud Paginas Web"
                    imagen={crudpaginasweb} title="Crud Paginas Web"
                    descripcion="Este proyecto es basicamente un crud conectado a una base de datos creada por mi en Firebase/Firestore, permite agregar, editar y borrar nuevas tarjetas con informacion de paginas web." />
                <Carta
                    alt="Imagen del proyecto Post it Simulator"
                    repositorio="https://github.com/Yerkoala/Post-It-Simulator"
                    demo="https://postitsimulator.web.app/"
                    imagen={postit} title="PostIt Simulator"
                    descripcion="Proyecto que funciona con LocalStorage donde uno agrega notas tipo PostIt y las puede marcar como importantes o no." />
            </div>
        </div>
    )
}

export default forwardRef(Proyectos);