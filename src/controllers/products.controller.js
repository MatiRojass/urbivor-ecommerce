const products = (req, res) => {
	res.render('products.ejs')
}

const productDetail = (req, res) => {
	res.send('Product ' + req.params.id)
}

export default {
	products,
	productDetail
}

