import { Router } from 'express'
import productsController from '../controllers/products.controller.js'

const router = Router()

router
	.get('/:id', productsController.productDetail)
	.get('/', productsController.products)

export default router