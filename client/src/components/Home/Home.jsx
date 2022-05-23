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
import SearchName from '../SearchName/SearchName';
import style from './Home.module.css';

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
      <header>
        <div>Fan page DOGS</div>
        <div>
            <button onClick={e=>handleRefresh(e)}>
              Refresh
            </button>
        </div >
        <div className={style.filtros}>
        <ul>
            <li>
               <div className={style.create}>
                 <Link to='/Create_Dogs'>
                   Create Dogs
                 </Link>
                 </div>
            </li>
            <li>
               <div>
                <SearchName/>
               </div>
            </li>
            <li>
             <div>
               <FilterByTemperament/>
             </div>
            </li>
            <li>
             <div>
              <FilterByRaza/>
             </div>
            </li>
            <li>
            <div>
               <OrderAlfabetico/>
            </div>
            </li>
            <li>
             <div>
              <OrderByPeso/>
             </div>
            </li>
        </ul>
        </div>
      </header>
      <section>
        <div className={style.cardscontainer}>
            {
                currentDogs.length > 0 ? (
                  currentDogs.map(e=>(
                        <Card img={e.image} name={e.name} temperaments={e.temperament} weight={e.weight} id={e.id} key={e.id}/>
                  ))): currentDogs === false?(
                      <div>
                          {/* <img src={Notfound} añt="img not found"/> */}
                          <h1>no anda</h1>
                      </div>
                  ):(
                      <div>
                          <h1 className={style.cargando}>Cargando...</h1>
                      </div>
                  )
              }
        </div>
        <div>
            <Paginado
            dogsPerPage={dogsPerPage}
            dogs={dogs.length}
            pagination={pagination}
            />
        </div>
      </section>
      <footer>
          Maxi cacciamano 2022
      </footer>
      </>
  )
}
