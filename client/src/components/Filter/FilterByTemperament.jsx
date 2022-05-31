import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterByTemperament} from '../../Redux/Action/Action'
import  './Filter.module.css';


 const FilterByTemperament = () => {
    const temperamentss = useSelector(state=>state.temperaments);
    const dispatch = useDispatch();


    const handleselectTemperament = (e)=>{
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value))
    }
  return (
    <>
        <h4>Temperaments</h4>
       <select onChange={handleselectTemperament}>
           <option value="Sin_filtro">Temperaments</option>
           <p>Temperament</p>
           {
               temperamentss.map((e)=>{
                   return(
                       <option value={e.name} name="temperaments" key={e.id}>{e.name}</option>
                   )
               })
           }
       </select>
    </>
  )
}

export default FilterByTemperament;
