import axios from "axios"
import { GET_CAR } from "../Actiontypes/Cartypes"

export const Get_car=()=>async(dispatch)=>{
try {
    const res=await axios.get('/car/get')
    dispatch({type:GET_CAR,payload:res.data})
} catch (error) {
    console.log(error)
}
}
export const Add_car=(data)=>async(dispatch)=>{
    try {
        await axios.post('/car/post',data)
        dispatch(Get_car())
    } catch (error) {
        console.log(error)
    }
}
export const Delete_car=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/car/delete/${id}`)
        dispatch(Get_car())
    } catch (error) {
        console.log(error) 
    }
}
export const Edit_car=(id,data)=>async(dispatch)=>{
    try {
        await axios.put("/car/update/"+id,data)
        dispatch(Get_car())
    } catch (error) {
        console.log(error) 
    }
}