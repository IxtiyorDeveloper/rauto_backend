const Client = require('../models/client')

exports.add = async (req, res) => {
    try {
        const calent = new Client({
            ...req.body,
            photo: `http://localhost:5000/${req.file.path.slice(7)}`,
        })
        await calent.save()
        res.json({calent})
    } catch (e) {
        console.log('err', e)
    }
}

exports.one = async (req, res) => {
    try {
        const getId = await Client.findById({ _id: req.params.id })
        res.status(200).json(getId)
    } catch (e) {
        console.log(e, 'err')
    }
}

exports.all = async (req, res) => {
    try {
        const fj = await Client.find({}).limit(4).sort({ date: -1 })
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}

exports.updat = async (req, res) => {
    console.log(req.body)
    try {
        const fj = await Client.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: `http://localhost:5000/${req.file.path.slice(7)}`,
        })
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}

exports.delet = async (req, res) => {
    try {
        const fj = await Client.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}
