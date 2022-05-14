import React from 'react'
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {orderByName} from '../../Redux/Action/Action'

export const OrderAlfabetico = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('')

    function handleName(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordeando${e.target.value}`)
    }
  return (
    <>
      <select onChange={e=>handleName(e)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
      </select>
    </>
  )
}
export default OrderAlfabetico
