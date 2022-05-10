const initialState ={
    dogs:[],
    temperaments:[]
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
            default:
                return state;
    }
    
}