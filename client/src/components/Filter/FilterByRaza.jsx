import React from 'react'
import { useDispatch } from 'react-redux'
import {filterByRaza} from '../../Redux/Action/Action' 
import style from './Filter.module.css';

export const FilterByRaza = () => {
    const dispatch = useDispatch()

    function handleselectRaza(e){
        e.preventDefault();
        dispatch(filterByRaza(e.target.value))
    }
  return (
    <>
    <div className={style.raza}>
    <h4>Raza</h4>
    <select onChange={e=>handleselectRaza(e)} class="Select">
        <option value="All">All</option>
        <option value="Existing">Existing</option>
        <option value = "Created">Created</option>
    </select>
    </div>
    </>
  )
}
export default FilterByRaza