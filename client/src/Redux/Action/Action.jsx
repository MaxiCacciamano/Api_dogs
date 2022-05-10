import axios from "axios";

export function getAll(){
    return function(dispatch){
        return axios.get(`http://localhost:3001/dogs/`)
        .then((data)=>{
            return dispatch({
                type: "GET_DOGS",
                payload: data.data
            })
        })
        .catch(e=>console.log(e,"error en el getAll de actions"))
    }
}
export function getTemperaments(){
    return function(dispatch){
        return axios.get(`http://localhost:3001/temperament/`)
        .then((data)=>{
            return dispatch({
                type: "GET_TEMPERAMENTS",
                payload: data.data
            })
        })
    }
}