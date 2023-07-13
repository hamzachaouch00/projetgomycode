import React, { useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Get_Resrv } from "../../Redux/Action/ReservAction"
import ReservationCard from './ReservationCard'
const Resevationlist = () => {
    const dispatch=useDispatch()
    useEffect(() => {
    dispatch(Get_Resrv())
    }, [dispatch])
    const reservations=useSelector(state=>state.ReservReducer.reserv)
  return (
    <div>
    <h1>Liste Of Reservation</h1>
     {reservations?.map((el)=><ReservationCard key={el._id} el={el}/>)}

    </div>
  )
}

export default Resevationlist