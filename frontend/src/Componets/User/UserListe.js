import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Get_user } from '../../Redux/Action/UserAction'

import UserCard from './UserCard'

const UserListe = () => {
  
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(Get_user())
  
    },[dispatch])
  const users=useSelector(state=>state.UserReducer.users)
  
  return (
    <div>
      {users?.map((el)=><UserCard key={el._id} el={el} />)}
    </div>
  )
}

export default UserListe
