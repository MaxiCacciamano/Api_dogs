import React from 'react'
import {Link} from 'react-router-dom';
export const Landing = () => {
  return (
    <div>
        <h1>Bienvenidos a la pagina de perros</h1>
        <button>
        <Link to='/home'>Ingresar</Link>
        </button>
    </div>
  )
}
