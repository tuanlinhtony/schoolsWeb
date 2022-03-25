const express = require('express')
const router = new express.Router()

router.get('/', async(req, res) => {
    res.render('index')
})

router.get('/admin/login', async(req, res) => {
    res.render('login')
})

router.get('/admin/dashboard', async(req, res) => {
    res.render('admin')
})

module.exports = router