const home = (req, res) => {
	res.render('home.ejs')
}

const login = (req, res) => {
	res.render('login.ejs')
}

export default {
	home,
	login
}

