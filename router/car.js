const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const {
    add, one, renew, delet, getAll, filterMain, agregat
} = require('../controller/car')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/image')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    },
})

const upload = multer({ storage })

router.post('/add', upload.array('photo', 6), add)
router.get("/all", getAll)
router.get("/m1", filterMain)
router.get("/v1", agregat)
router.get('/:id', one)
router.put('/:id', upload.array('photo', 6), renew)
router.delete('/:id', delet)








module.exports = router
