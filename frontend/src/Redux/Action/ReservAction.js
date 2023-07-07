import axios from "axios"

import { GET_RESRV } from "../Actiontypes/Reservtypes"

export const Get_Resrv=()=>async(dispatch)=>{
try {
    const res=await axios.get('/reservation/get')
    dispatch({type:GET_RESRV,payload:res.data})
} catch (error) {
    console.log(error)
}
}
export const Add_resrv=(data)=>async(dispatch)=>{
    try {
        await axios.post('/reservation/post',data)
        dispatch(Get_Resrv())
    } catch (error) {
        console.log(error)
    }
}
export const Delete_resrv=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/reservation/delete/${id}`)
        dispatch(Get_Resrv())
    } catch (error) {
        console.log(error) 
    }
}
export const Edit_resrv=(id,data)=>async(dispatch)=>{
    try {
        await axios.put("/reservation/update/"+id,data)
        dispatch(Get_Resrv())
    } catch (error) {
        console.log(error) 
    }
}