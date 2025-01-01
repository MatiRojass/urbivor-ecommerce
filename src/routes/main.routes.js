import { Router } from 'express'
import productsRouter from './products.routes.js'
import mainController from '../controllers/main.controller.js'

const router = Router()

router
	.get('/', mainController.home)
	.get('/login', mainController.login)
	.use('/products', productsRouter)

export default router