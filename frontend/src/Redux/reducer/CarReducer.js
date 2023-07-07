import { GET_CAR } from "../Actiontypes/Cartypes"
const initialState = {
    car :[]
    }
    
    const CarReducer= (state = initialState, { type, payload }) => {
        switch (type) {
            case GET_CAR:
                return({...state,cars:payload.car})
          
            default:
               return state
        }
    
    }
    export default CarReducer