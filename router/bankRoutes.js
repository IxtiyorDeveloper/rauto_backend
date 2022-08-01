const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const { 
    creatBank, getById, getAll, getUpdate, getDelete, getStatus
} = require('../controller/bankController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/bank')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    },
})

const upload = multer({ storage })

router.post('/add', upload.array('photo', 3), creatBank)
router.get("/all", getAll)
router.get('/:id', getById)
router.put('/:id', upload.array('photo', 3), getUpdate)
router.put('/active/:id',  getStatus)
router.delete('/:id', getDelete)








module.exports = router
