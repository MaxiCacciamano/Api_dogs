const initialState ={
    dogs:[],
    temperaments:[],
    allDogs:[]
}

export default function rootReducer(state = initialState, action){
    console.log(action.payload);
    switch(action.type){
        case "GET_DOGS":
            return{
                ...state,
                dogs: action.payload
            }
        case "GET_TEMPERAMENTS":
            return{
                ...state,
                temperaments: action.payload
            }
        case "FILTER_BY_TEMPERAMENT":
            const allStateDogs = state.allDogs
            const temper = allStateDogs.filter(t=>{
                if(t.temperament){
                    const temperamen = t.temperament.map(p=>p.name)
                    return temperamen.includes(action.payload)
                }
            })
            return{
                ...state,
                dogs: action.payload === "Sin_filtro" ? allStateDogs : temper,
            }
            default:
                return state;
    }
    
}