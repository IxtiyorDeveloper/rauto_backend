const mongoose = require("mongoose")

const authSchema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        date: {type :Date, default: Date.now()}
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model("Auth", authSchema)
