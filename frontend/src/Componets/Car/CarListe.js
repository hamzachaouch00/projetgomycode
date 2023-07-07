import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Get_car } from '../../Redux/Action/CarAction'
import CarCard from './CarCard'

import Navigation from '../Navigation'

const CarListe = () => {
  const [search,setSearch]=useState('')
    const dispatch=useDispatch()
    useEffect(() => {
    dispatch(Get_car())
    }, [dispatch])
    const cars=useSelector(state=>state.CarReducer.cars)
  return (
    <div>
    <Navigation setSearch={setSearch}/>
      {cars?.filter((el)=>el.model.toUpperCase().includes(search.toUpperCase())).map((el)=><CarCard key={el._id} el={el}/>)}
    </div>
  )
}

export default CarListe