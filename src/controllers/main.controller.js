import { __dirname } from '../constants.js'
import { resolve } from 'path'

const home = (req, res) => {
	res.sendFile(resolve(__dirname, './views/home.html'))
}

const login = (req, res) => {
	res.sendFile(resolve(__dirname, './views/login.html'))
}

export default {
	home,
	login
}

