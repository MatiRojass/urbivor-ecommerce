import express, { urlencoded } from 'express'
import { resolve } from 'path'
import { PORT, __dirname } from './constants.js'

//Main Router
import mainRouter from './routes/main.routes.js'

const app = express()

//settings
app.use(express.static(resolve(__dirname, '../public')))
app.set('views', resolve(__dirname, './views'))

//middlewares
app.use(express.json())
app.use(urlencoded({ extended: true }))

//routes
app.use(mainRouter)

app.listen(PORT, () => {
	console.log('Servidor corriendo en el puerto 3000')
})