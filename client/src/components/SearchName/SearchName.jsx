import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {searchByName} from '../../Redux/Action/Action'

export const SearchName = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        dispatch(searchByName(name))
    }

    function handleInput(e){
        e.preventDefault();
        setName(e.target.value);
        console.log(name)
    }


  return (
    <>
     <form onSubmit={(e)=>handleSubmit(e)}>
         <input
         placeholder="Search Dog"
         onChange={e=>handleInput(e)}
         />

         <button type="submit">
         🔍
         </button>
     </form>
    </>
  )
}
export default SearchName;
