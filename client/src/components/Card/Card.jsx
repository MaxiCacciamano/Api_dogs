import React from 'react'
import {Link} from 'react-router-dom'
import style from './Card.module.css';

export const Card = ({id,name,height,weight,life_span,img,description,temperaments, }) => {




  return (
      <div className = {style.main}>
          <div  className = {style.box}>
            <Link to={`/detail/${id}`}>
              <div className = {style.content}>
          <p>{name}</p>
                   <img src={img} alt="img not found" />
                  <p>Temperaments:</p>
                  <p>{temperaments}</p>
                  {/* <p>weight:</p>
                  <p>{weight}</p> */}
                  <br/>
              </div>
            </Link>
          </div>
      </div>
  )
}
