import { __dirname } from '../constants.js'
import { resolve } from 'path'

const products = (req, res) => {
	res.sendFile(resolve(__dirname, './views/products.html'))
}

const productDetail = (req, res) => {
	res.send('Product ' + req.params.id)
}

export default {
	products,
	productDetail
}

