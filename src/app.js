import express from 'express'
import morgan from 'morgan'
//Routes
import languageRoutes from './routers/language.routes'

const app = express()

//setting 
app.set("port", 4000)

//middlerware
app.use(morgan("dev"))
app.use(express.json())

//Routes
app.use('/api/language', languageRoutes)

export default app