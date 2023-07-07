

import {combineReducers } from "redux"

import UserReducer from "./UserReducer"
import CarReducer from "./CarReducer"
import ReservReducer from "./ReservReducer"



const rootreducer=combineReducers({UserReducer,CarReducer,ReservReducer})

export default rootreducer