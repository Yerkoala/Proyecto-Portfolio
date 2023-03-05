import React, { useRef } from 'react'
import Contacto from './components/Contacto';
import Header from './components/Header'
import HomeCuerpo from './components/HomeCuerpo';
import Proyectos from './components/Proyectos';
import Skills from './components/Skills';

const Home = () => {
  
  const refProyectos = useRef(null);
  const refSkills = useRef(null);
  const refContacto = useRef(null);
  const refHome = useRef(null);

  const handleClickProyectos = () => {
    refProyectos.current?.scrollIntoView({block: 'start', blockOffset: 10,behavior: 'smooth'});
  }
  const handleClickHome = () => {
    refHome.current?.scrollIntoView({behavior: 'smooth'});
  }
  const handleClickSkills = () => {
    refSkills.current?.scrollIntoView({behavior: 'smooth'});
  }
  const handleClickContacto = () => {
    refContacto.current?.scrollIntoView({behavior: 'smooth'});
  }
  const volverArriba =()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  return (
    <div className='portfolioCuerpo'>
      <button id='arriba' onClick={volverArriba}>UP</button>
      <Header handleClickProyectos={handleClickProyectos} handleClickSkills= {handleClickSkills} handleClickContacto= {handleClickContacto} handleClickHome= {handleClickHome}/>
      <HomeCuerpo ref={refHome} titulo={"Sobre mí"}/>
      <Proyectos ref={refProyectos} titulo={"Proyectos"}/>
      <Skills ref={refSkills} titulo={"Skills"}/>
      <Contacto ref={refContacto} titulo={"Contacto"}/>
    </div>
  )
}

export default Home