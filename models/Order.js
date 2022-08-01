const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
    {
        name: String,
        phone: Number
    },
    {
        timestamps: true,
    }
)
module.exports = mongoose.model('order', orderSchema)
