const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "userlar"
    },
    madel: String,
    madelru: String,

    marka: String,
    markaru: String,

    color: String,
    colorru: String,

    yili: Number,

    divigitel:Number,

    yoqilgi: String,
    yoqilgiru: String,

    transmission: String,
    transmissionru: String,

    kuzuv: String,
    kuzuvru:String,

    perevod:String,
    perevodru: String,

    yurgani: Number,

    narxi: Number,

    aksiya: String,

    opisaniya:  String,

    opisaniyaru: String,

    photo: {
        type: Array,
        data: Buffer
    },
    credit: String,
    date: {type: Date, default: Date.now}
})
module.exports = mongoose.model("Car", carSchema)
