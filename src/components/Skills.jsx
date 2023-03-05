import React, { forwardRef } from 'react'
import "./Style.css"
import css from "./images/css.png"
import Javascript from "./images/javascript.png"
import html from "./images/html.png"
import react from "./images/react.png"
import bootstrap from "./images/bootstrap.png"
import ionic from "./images/ionic.png"
import mysql from "./images/mysql.png"
import nodejs from "./images/nodejs.png"
import firebase from "./images/firebase.png"
import expressjs from "./images/expressjs.png"

const Skills = ({ titulo }, ref) => {
  return (
    <div className='skillsPage'>
      <h1 ref={ref} className='titulo'>{titulo}</h1>
      <div className="skillsCuerpo">
        <div className="bloque">
          <h2 className='skillsTitulo'>Ingles</h2>
          <div className="skillsUnidad">
            <div className="skill">
              <h4>Listening</h4>
              <h1>B2</h1>
            </div>
            <div className="skill">
              <h4>Reading</h4>
              <h1>B2</h1>
            </div>
            <div className="skill">
              <h4>Writing</h4>
              <h1>B2</h1>
            </div>
            <div className="skill">
              <h4>Speaking</h4>
              <h1>B1</h1>
            </div>
          </div>
        </div>
        <div className="bloque">
          <h2 className='skillsTitulo'>Frontend</h2>
          <div className="skillsUnidad">
            <div className="skill">
              <h4>Javascript</h4>
              <img src={Javascript} alt="Logo de javascript" />
            </div>
            <div className="skill">
              <h4>HTML</h4>
              <img src={html} alt="Logo de html" />
            </div>
            <div className="skill">
              <h4>CSS</h4>
              <img src={css} alt="Logo de css" />
            </div>
            <div className="skill">
              <h4>ReactJS</h4>
              <img src={react} alt="Logo de react" />
            </div>
            <div className="skill">
              <h4>Bootstrap</h4>
              <img src={bootstrap} alt="Logo de bootstrap" />
            </div>
            <div className="skill">
              <h4>Ionic</h4>
              <img src={ionic} alt="Logo de ionic" />
            </div>
          </div>
        </div>

        <div className="bloque">
          <h2 className='skillsTitulo'>Backend</h2>
          <div className="skillsUnidad">
            <div className="skill">
              <h4>NodeJS</h4>
              <img src={nodejs} alt="Logo de mysql" />
            </div>
            <div className="skill">
              <h4>Express</h4>
              <img src={expressjs} alt="Logo de html" />
            </div>
            <div className="skill">
              <h4>MySQL</h4>
              <img src={mysql} alt="Logo de css" />
            </div>
            <div className="skill">
              <h4>Firebase</h4>
              <img style={{ width: "50px" }} src={firebase} alt="Logo de react" />
            </div>
          </div>
        </div>

        <div className="bloque">
          <h2 className='skillsTitulo'>Habilidades Blandas</h2>
          <div className="skillsUnidad">
            <div className="skill">
              <h4>Trabajo en equipo</h4>
            </div>
            <div className="skill">
              <h4>Proactivo</h4>
            </div>
            <div className="skill">
              <h4>Creativo</h4>
            </div>
            <div className="skill">
              <h4>Trabajo bajo presión</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default forwardRef(Skills)