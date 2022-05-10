import React from 'react'
import {Link} from 'react-router-dom'

export const Card = ({id,name,height,weight,life_span,img,description,temperament}) => {

  return (
      <>
    <div>
        <p>{name}</p>
    </div>
    <div>
        <img src={img} alt="img not found" />
    </div>
    <br/>
    <p>Temperaments:</p>
    <p>{temperament}</p>
    <p>weight:</p>
    <p>{weight}</p>
    <br/>
    <div>
        <Link to={`/detail/${id}`}>
            <button>Read more</button>
        </Link>
    </div>
      </>
  )
}
