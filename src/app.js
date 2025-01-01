import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

const PORT = 3000

app.get('/', (req, res) => {
	res.sendFile(resolve(__dirname, './views/index.html'))

})

app.listen(PORT, () => {
	console.log('Servidor corriendo en el puerto 3000')
})