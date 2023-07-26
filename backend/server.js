const express = require('express')
const connectdb = require('./config/connectdb')
const userRoutes = require('./routes/userRoute')
const carRoutes = require('./routes/carRouter')

const resrvRoutes = require('./routes/resrvRouter')
const { mailrouter } = require('./routes/emailRouter')
const app = express()
const port =6000
app.use(express.json())

connectdb()


app.use("/api/user",userRoutes)
app.use("/api/car",carRoutes)
app.use("/api/resrv",resrvRoutes)
app.use("/",mailrouter)
app.listen(port,console.log(`app is running on port ${port}`))
