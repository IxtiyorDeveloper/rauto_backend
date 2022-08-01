const Order = require('../models/Order')

exports.createOrder = async (req, res) => {
    try {
        const order = new Order({
            ...req.body
        })
        await order.save()
        res.status(200).json({ data: order })
    } catch (e) {
        console.log('err', e)
    }
}

exports.one = async (req, res) => {
    try {
        const getId = await Order.findById({ _id: req.params.id })
        res.status(200).json(getId)
    } catch (e) {
        console.log(e, 'err')
    }
}

exports.all = async (req, res) => {
    try {
        const fj = await Order.find({}).sort({ date: -1 })
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}

exports.updat = async (req, res) => {
    console.log(req.body)
    try {
        const fj = await Order.findByIdAndUpdate(req.params.id, {
            ...req.body
        })
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}

exports.delet = async (req, res) => {
    try {
        const fj = await Order.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json(fj)
    } catch (e) {
        console.log(e, 'er')
    }
}
