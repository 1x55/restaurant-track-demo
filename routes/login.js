const express = require('express')
const router = express.Router()

//add controllers  
const loginController = require('../controllers/login') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//single controller with multiple methods performing different logic
router.get('/', loginController.getlogin)
router.get('/new-acct', loginController.getSignup)
router.get('/logout', loginController.getlogout)
router.post('/', loginController.postLogin)
router.post('/new', loginController.postSignup)
 
module.exports = router