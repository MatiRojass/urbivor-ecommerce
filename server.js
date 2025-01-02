import app from './src/app.js'
import { PORT } from './config/config.js'

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log('Servidor corriendo en el puerto 3000')
})