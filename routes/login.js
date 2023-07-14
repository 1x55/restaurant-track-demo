const express = require('express')
const router = express.Router()

//add controllers  
const indexController = require('../controllers/index') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', loginController.getlogin)
router.get('/new-acct', loginController.getSignup)
router.get('/logout', loginController.getlogout)
router.post('/', loginController.postLogin)
router.post('/new', loginController.postSignup)

module.exports = router