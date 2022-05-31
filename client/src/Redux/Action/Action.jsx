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

export function searchByName(name){
    return function (dispatch){
        return axios.get(`http://localhost:3001/dogs?name=${name}`)
        .then(data =>{
            return dispatch({
                type: "GET_DOGS_NAME",
                payload: data.data
            })
        })
        .catch((error)=>{
            alert("El personaje solicitado no existe")
            console.log(error ,"error en searchByName")
        })
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
            .catch((e)=>{
                alert( "error en el getTemperaments", e)
            })
    }
}

export function postDogs(payload){
    try{
        return async function (){
            const response = await axios.post('http://localhost:3001/dogs/', payload);
            console.log(response);
            return response;
        }
    }
    catch(err){
        console.log("el error esta en postDogs de actions")
    }
}

export function getDogsById(id){
    return async function(dispatch){
        try{
            const det = await axios.get(`http://localhost:3001/dogs/${id}`);
            return dispatch({
                type: "Get_by_id",
                payload: det.data
            })
        }
        catch(e){
            console.log("el error viene del getDogsById de actions", e)
        }
    }
}
export function deleteDogs(id){
    return function (dispatch){
        return axios.get(`http://localhost:3001/dogs/delete/${id}`)
        .then((res)=>{
            dispatch({
                type:"DELET_DOGS",
                payload:res.data
            })
        })
        .catch((e)=>{
            console.log("error en el delete",e)
        })
    }
}

export function removeDetail(payload){
    return{
        type: "REMOVE_DETAIL",
        payload: {}
    }
}

export function filterByTemperament(payload){
    return{
        type: "FILTER_BY_TEMPERAMENT",
        payload
    }
}


export function filterByRaza(payload){
    return{
        type: "FILTER_BY_RAZA",
        payload
    }
}

export function orderByName(payload) {
    return {
        type: "ORDER_BY_NAME",
        payload
    }
}
export function orderWeigthmin(payload){
    return{
        type: "ORDER_WIDTH",
        payload
    }
}
