import React from 'react'
import {Link} from 'react-router-dom';
import style from './NavBar.module.css';
export const NavBar = () => {
  return (
    <>
            <div className={style.title}>
          <Link to={`/home`}>
          <a>Fan page DOGS</a>
          </Link>
        </div>
        <div className={style.create}>
           <Link to='/Create_Dogs'>
                 Create Dogs
            </Link>
        </div>
    </>
  )
}

export default NavBar;