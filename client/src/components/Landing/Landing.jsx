import React from 'react'
import {Link} from 'react-router-dom';
import style from './Landing.module.css'
export const Landing = () => {
  return (
    <div className={style.landing}>
        <h1>Bienvenidos a la pagina de perros</h1>
        <button className={style.button}>
        <Link to='/home' className={style.but}>Ingresar</Link>
        </button>
    </div>
  )
}
