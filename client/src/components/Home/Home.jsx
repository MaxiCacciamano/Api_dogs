import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom';

// import {getAll} from '../../Redux/Action/Action'
import {Card} from '../Card/Card';
import {Paginado} from '../Paginado/Paginado'
import FilterByTemperament from '../Filter/FilterByTemperament';
import FilterByRaza from '../Filter/FilterByRaza';
import OrderAlfabetico from '../Order/OrderAlfabetico.jsx';
import OrderByPeso from '../Order/OrderByPeso.jsx';
import SearchName from '../SearchName/SearchName'

import {getAll} from '../../Redux/Action/Action'

export const Home = () => {
    const dispatch= useDispatch();
    const {dogs} = useSelector(state => state);
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage] = useState(8)
    const indexLastDogs = currentPage * dogsPerPage;
    const indexFirstDogs = indexLastDogs - dogsPerPage;
    const currentDogs = dogs.slice(indexFirstDogs, indexLastDogs)

    const pagination=(e)=>{
        setCurrentPage(e)
    }

    function handleRefresh(e){
        e.preventDefault();
        dispatch(getAll())
    }

  return (
      <>
        <div>Fan page DOGS</div>
        <div onClick={e=>handleRefresh(e)}>
            Refresh
        </div>
        <div>
            <Link to='/Create_Dogs'>
                Create Dogs
            </Link>
        </div>
        <div>
            <SearchName/>
        </div>
        <div>
            <FilterByTemperament/>
        </div>
        <div>
            <FilterByRaza/>
        </div>
        <div>
            <OrderAlfabetico/>
        </div>
        <div>
            <OrderByPeso/>
        </div>
        <div>
            {
                currentDogs?.length > 0 ? 
                currentDogs?.map(e=>{
                    return  <Card img={e.image} name={e.name} temperaments={e.temperament} weight={e.weight} id={e.id} key={e.id}/>
                }):
                <h1>Cargando...</h1>
            }
        </div>
        <div>
            <Paginado
            dogsPerPage={dogsPerPage}
            dogs={dogs.length}
            pagination={pagination}
            />
        </div>
      </>
  )
}
