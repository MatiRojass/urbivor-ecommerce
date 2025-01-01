import { Router } from 'express'

const router = Router()

router
	.get('/:id', (req, res) => res.send('product' + req.params.id))
	.get('/', (req, res) => res.send('products'))

export default router