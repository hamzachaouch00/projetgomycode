import { GET_RESRV } from "../Actiontypes/Reservtypes"

const initialState = {
    reserv :[]
    }
    
    const ReservReducer= (state = initialState, { type, payload }) => {
        switch(type){
                 case GET_RESRV:
                    return({...state,reserv:payload})
                    default:
            return state

        }
    }
    export default ReservReducer