import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {getDogsById, removeDetail} from '../../Redux/Action/Action';


export const SearchByid = (props) => {

  const dispatch = useDispatch();
  const {id} = useParams()
  // console.log(id)
  
  useEffect(()=>{
    dispatch(getDogsById(id));
    return (()=>{
      dispatch(removeDetail())
    })
  },[dispatch])

  const allDetail = useSelector((state)=>state.detail)
  
  return (
    <>
     <div>
      <Link to="/home"><button>Back</button></Link>
      <br/><br/>
    </div> 
    {
    allDetail.length > 0?(
    <div>
    <div>
      <img src={allDetail[0].image}/>
    </div>
    <div>
        <h1>Name:</h1>
        <h2>{allDetail[0].name}</h2>
    </div>
    <div>
        <h1>height:</h1>
        <p><br/>{allDetail[0].height}<br/></p>
    </div>
    <div>
      <h1>weight:</h1>
      <p><br/>{allDetail[0].weight}<br/></p>
    </div>
    <div>
      <h1>life span:</h1>
      <p><br/>{allDetail[0].life_span}<br/></p>
    </div>
    <div>
      <h1>Temperament:</h1>
      {
         <p>
            {allDetail[0].createdInDB
            ? allDetail[0]?.temperaments?.map((el) => el.name).join(", ")
            : allDetail[0].temperament}
         </p>
      }
    </div>
    </div>

    )
    :(
    <div>
        <h1>CARGANDO...</h1>                  
    </div>
    )
  }
    </>
  )
}
export default SearchByid
