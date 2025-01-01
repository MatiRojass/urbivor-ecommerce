import { Router } from 'express'
import productsRouter from './products.routes.js'

const router = Router()

router
	.get('/', (req, res) => {
		res.send('Home')
	})
	.use('/products', productsRouter)
	.get('/login', (req, res) => {
		res.send('login')
	})

export default router