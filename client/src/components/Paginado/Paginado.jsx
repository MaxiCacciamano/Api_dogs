import React from 'react'

export const Paginado = ({dogsPerPage, dogs, pagination}) => {
    const pageNumbres = [];
    const paginado = Math.ceil(dogs/dogsPerPage)
    for(let i=1;i <= paginado; i++){
        pageNumbres.push(i)
    }
  return (
    <>
    <div>
        <ul>
                {pageNumbres?.map(e=>(
                    <li key={e}>
                        <p onClick={()=> pagination(e)}>{e}</p>
                    </li>
                ))}
        </ul>
    </div>
    </>
  )
}
