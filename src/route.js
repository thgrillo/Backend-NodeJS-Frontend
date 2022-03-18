const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/blog', (req, res) => res.render('blog-single'))

module.exports = route