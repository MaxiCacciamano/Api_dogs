import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {getDogsById, removeDetail} from '../../Redux/Action/Action';


export const SearchByid = () => {

  const allDetail = useSelector((state)=>state.detail)
  const dispatch = useDispatch();
  console.log(allDetail)
  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    dispatch(getDogsById(id));
    return (()=>{
      dispatch(removeDetail())
    })
  },[dispatch])

  return (
    <>
    <div>
      <Link to="/home"><button>Back</button></Link>
      <br/><br/>
    </div>
    {
    allDetail.name?
    <div>
    <div>
      <img src={allDetail.image}/>
    </div>
    <div>
        <h1>Name:</h1>
        <h2>{allDetail.name}</h2>
    </div>
    <div>
        <h1>height:</h1>
        <p><br/>{allDetail.height}<br/></p>
    </div>
    <div>
      <h1>weight:</h1>
      <p><br/>{allDetail.weight}<br/></p>
    </div>
    <div>
      <h1>life_span:</h1>
      <p><br/>{allDetail.life_span}<br/></p>
    </div>
    <div>
      <br/>{allDetail.temperaments}<br/>
    </div>
    </div>
    :
    <div>
        <h1>CARGANDO...</h1>                  
    </div>
  }
    </>
  )
}
export default SearchByid
