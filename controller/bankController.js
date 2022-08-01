const Bank = require("../models/bank")

exports.creatBank = async(req, res, next)=>{
    const rasmla = req.files
    let photos = []
    rasmla.forEach(photo => photos.push(`http://localhost:5000/${photo.path.slice(7)}`))
    try {
        const bank = new Bank({
            ...req.body,
            photo: photos
        })
        await bank.save()
        res.json({success: true, data: bank})
    } catch (err) {
        next(err)
    }
}

exports.getById = async(req, res, next)=>{
    try {
        const bank = await Bank.findById(req.params.id)
        res.json({bank})
    } catch (err) {
        next(err)
    }
}


exports.getAll = async(req, res, next)=>{
    try {
        const bank = await Bank.find({}).sort({date: -1})
        res.json({bank})
    } catch (err) {
        next(err)
    }
}

exports.getUpdate = async(req, res, next)=>{
    try {
        const rasmla = req.files
        let photos = []
        rasmla.forEach(photo =>
            photos.push(`http://localhost:5000/${photo.path.slice(7)}`)
        )
        const bank = await Bank.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: photos,
        })
        res.json({bank})
    } catch (err) {
        next(err)
    }
}

exports.getStatus = async(req, res, next)=>{
    try {
        const bank = await Bank.findByIdAndUpdate(req.params.id, {$set: {pending: true} })
        res.json({bank})
    } catch (err) {
        next(err)
    }
}

exports.getDelete = async(req, res, next)=>{
    try {
        const bank = await Bank.findByIdAndDelete(req.params.id)
        res.json({bank})
    } catch (err) {
        next(err)
    }
}
