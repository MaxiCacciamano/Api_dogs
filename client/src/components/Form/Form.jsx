
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {postDogs, getTemperaments } from '../../Redux/Action/Action';




export const Form = () => {
  const dispatch = useDispatch()

  const temperaments = useSelector((state)=> state.temperaments).sort(
    function(a,b){
      if(a>b) return -1
      return 1
    }
  );
  const [errors, setErrors] = useState(true);
  const [input, setInput] = useState({
    name:"",
    img:"",
    height:"",
    weight:"",
    life_span:"",
    temperaments:[]
  })

  useEffect(()=>{
    dispatch(getTemperaments())
  },[])
  
  // function validate(input){

  // }

  // function handleChange(e){
  //   setInput({
  //     ...input,
  //     [e.target.value]:e.target.value
  //   })
  //   setErrors(validate({
  //     ...input,
  //     [e.target.name]: e.target.value
  //   }))
  // }

  function handleSelect (e){
    e.preventDefault()
    if(!input.temperaments.includes(e.target.value)){
      return setInput({
        ...input,
        temperaments:[...input.temperaments, e.target.value]
      })
    }
  }

  function handleDelete(e){
    setInput({
      ...input,
      temperaments: input.temperaments.filter((temper)=> temper !== e)
    })
  }

  return (
    <>
    <div>
      <Link to="/home"><button>Back</button></Link>
    </div>
    <div>
    <h1>Create Dogs</h1>
    <form>
      <div>
        <p>Name</p>
        <input
        type="text"
        value={input.name}
        name="name" 

        />
      </div>
      <div>
        <p>Image</p>
        <input
        type="text"
        value={input.image}
        name="image"
        placeholder="Image"
        />
      </div>
      <div>
        <p>height</p>
        <input
        type="text"
        value={input.height}
        />
      </div>
      <div>
        <p>weight</p>
        <input
        type="text"
        value={input.weight}
        />
      </div>
      <div>
        <p>life_span</p>
        <input
        type="text"
        value={input.life_span}
        />
      </div>
      <div>
        <p>temperament</p>
        <select onChange={handleSelect}>
        {temperaments.map((temp)=>(
            <option key={temp.name} value={temp.name}>
              {temp.name}
            </option>
        ))}
        </select>
        {/* <ul>
          <li>{input.temperaments.map(t=>t+",")}</li>
        </ul> */}
      </div>
      <div>
        <h3>You have selected that:</h3>
        {input.temperaments.map((e)=>(
          <ul key={e}>
            <li>{e}</li  >
            <button onClick={()=>handleDelete(e)}></button>
          </ul>
        ))}
      </div>
    </form>
    </div>
    </>
  )
}
