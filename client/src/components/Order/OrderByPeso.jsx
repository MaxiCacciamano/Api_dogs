import React from 'react'
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {orderWeigthmin} from '../../Redux/Action/Action'

export const OrderByPeso = () => {

    const dispatch =useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [order, setOrder] = useState('')

    function handlewidth(e){
        e.preventDefault();
        dispatch(orderWeigthmin(e.target.value))

    }
  return (
    <>
        <div >
          {/* <h5 >Order by weight</h5> */}
          
          <select
            onChange={(e) => {
              handlewidth(e);
            }}
          >
            <option defaultValue value="all" hidden>
              Order
            </option>
            <option value="asc">Heaviest 1º</option>
            <option value="desc">Lightest 1º</option>
          </select>
        </div>
    </>
  )
}
export default OrderByPeso;
