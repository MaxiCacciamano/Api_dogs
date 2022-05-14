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
    try{
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
    catch(e){
        console.log(e, "error en el getTemperaments", e)
    }
}

export function getDogsById(id){
    return async function(dispatch){
        try{
            const details = await axios.get(`http://localhost:3001/dogs/${id}`);
            return dispatch({
                type: "Get_by_id",
                payload: details.data
            })
        }
        catch(e){
            console.log("el error viene del getDogsById d3e actions", e)
        }

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
