import express, { urlencoded } from 'express'
import { resolve } from 'path'
import { __dirname } from './constants.js'

//Main Router
import mainRouter from './routes/main.routes.js'

const app = express()

//settings
app.use(express.static(resolve(__dirname, '../public')))
app.set('views', resolve(__dirname, './views'))
app.set('view-engine', 'ejs')

//middlewares
app.use(express.json())
app.use(urlencoded({ extended: true }))

//routes
app.use(mainRouter)

export default app