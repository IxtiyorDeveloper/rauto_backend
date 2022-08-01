const express = require('express')
const {
    createOrder, one, all, updat, delet
} = require('../controller/order')
const router = express.Router()

router.post('/add', createOrder)
router.get('/all', all)
router.get('/:id', one)
router.put('/:id', updat)
router.delete('/:id', delet)

module.exports = router
