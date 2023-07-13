import axios from "axios"
import { GET_ONE_USER, GET_USER } from "../Actiontypes/Usertypes"

export const Get_user=()=>async(dispatch)=>{
try {
    const res=await axios.get('user')
    dispatch({type:GET_USER,payload:res.data})
} catch (error) {
    console.log(error)
}
}
export const Add_user=(data)=>async(dispatch)=>{
    try {
        await axios.post('user/post',data)
        dispatch(Get_user())
    } catch (error) {
        console.log(error)
    }
}
export const Delete_user=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`user/delete/${id}`)
        dispatch(Get_user())
    } catch (error) {
        console.log(error) 
    }
}
export const Edit_user=(id,data)=>async(dispatch)=>{
    try {
        await axios.put("user/update/"+id,data)
        dispatch(Get_user())
    } catch (error) {
        console.log(error) 
    }
}
export const get_one_user=(token)=>async(dispatch)=>{

    try {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
       const res= await axios.get("user/current",config)
       dispatch({type:GET_ONE_USER,payload:res.data})

        
    } catch (error) {
        console.log(error) 
    }
}