const mongoose= require('mongoose')

const connectdb =async()=>{
    try {
        await mongoose.connect("mongodb+srv://hamzachauch10:hamza123@cluster0.0dzkd9i.mongodb.net/")
       
        console.log("db is connected")
        
    } catch (error) {
        console.log("db is not connected")
    }
}
module.exports=connectdb