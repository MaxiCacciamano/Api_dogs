import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {filterByTemperament} from '../../Redux/Action/Action'


 const FilterByTemperament = () => {
    const temperamentss = useSelector(state=>state.temperaments);
    const dispatch = useDispatch();


    const handleselectTemperament = (e)=>{
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value))
    }
  return (
    <>
       <select onChange={handleselectTemperament}>
           <option value="Sin_filtro">Temperaments</option>
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
