const mongoose = require('mongoose')

const ClientSchema = mongoose.Schema(
    {
        ismizuz: String,
        ismizru: String,
        data: String,
        photo: {
            type: Array,
            data: Buffer
        },
        date: { type: Date, default: Date.now }
    }
)
module.exports = mongoose.model("Calient", ClientSchema)
