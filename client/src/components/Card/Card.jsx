import React from 'react'
import {Link} from 'react-router-dom'
import style from './Card.module.css';

export const Card = ({id,name,height,weight,life_span,img,description,temperaments}) => {

  return (
      <div className = {style.main}>
          <div  className = {style.box}>
              <div className = {style.imgBx}>
                   <img src={img} alt="img not found" />
              </div>
              <div className = {style.content}>
                  <p>{name}</p>
                  <p>Temperaments:</p>
                  <p>{temperaments}</p>
                  <p>weight:</p>
                  <p>{weight}</p>
                  <br/>
                    <div className = "card-footer">
                      <Link to={`/detail/${id}`}>
                        <button>Read more</button>
                      </Link>
                   </div>
              </div>
          </div>
      </div>
  )
}
