const express = require('express')

const router = express.Router();

const {UserCreate, UserGetById, UserGetAll, UserUpdate, UserDelete, UserLogin, verifyToken, Protected} = require('../controller/auth')

router.post('/add',  UserCreate.add)
router.post('/login', UserLogin)
router.get('/verify', verifyToken, Protected)
router.get('/all', UserGetAll)
router.get('/:id', UserGetById)
router.put('/:id', UserUpdate)
router.delete('/:id', UserDelete)


module.exports = router
