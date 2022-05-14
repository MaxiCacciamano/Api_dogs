import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {filterByRaza} from '../../Redux/Action/Action' 

export const FilterByRaza = () => {
    const dispatch = useDispatch()
    const raza = useSelector((state)=>state.temperaments)
    function handleselectRaza(e){
        e.preventDefault();
        dispatch(filterByRaza(e.target.value))
    }
  return (
    <select onChange={e=>handleselectRaza(e)}>
        <option value="All">All</option>
        <option value="Existing">Existing</option>
        <option value = "Created">Created</option>
    </select>
  )
}
export default FilterByRaza