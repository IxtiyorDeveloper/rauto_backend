const Mowina = require('../models/carInfo')

exports.add = async (req, res, next) => {
    const rasmla = req.files
    let photos = []
    rasmla.forEach(photo => photos.push(`http://localhost:5000/${photo.path.slice(7)}`))
    try {
        const mowin = new Mowina({
            ...req.body,
            photo: photos
        })
        mowin.save()
        res.status(200).json({ data: mowin })
    } catch (err) {
        next(err)
    }
}

exports.one = async (req, res, next) => {
    try {
        const getId = await Mowina.findById({ _id: req.params.id })
        res.status(200).json(getId)
    } catch (err) {
        next(err)
    }
}

exports.getAll = async(req, res, next)=>{
    try {
        const getAllmowin = await Mowina.find({}).sort({date: -1})
        res.json({getAllmowin})
    } catch (err) {
        next(err)
    }
}

exports.renew = async (req, res, next) => {
    try {
        const rasmla = req.files
        let photos = []
        rasmla.forEach(photo =>
            photos.push(`http://localhost:5000/${photo.path.slice(7)}`)
        )
        const updateMowina = await Mowina.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: photos,
        })
        res.status(200).json(updateMowina)
    } catch (err) {
         next(err)
    }
}

exports.delet = async (req, res, next) => {
    try {
        const l = await Mowina.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json(l)
    } catch (err) {
        next(err)
    }
}

// main pagedagi filter
exports.filterMain = async (req, res)=>{
    let yili, yurgani, narxi, madel;
    if (!!req.query.from || !!req.query.to) {
        yili = { from: req.query.from, to: req.query.to};
    }
    else {
        yili = req.query.yili;
    }
    if(!!req.query.from || !!req.query.to){
        yurgani = { from: req.query.from, to: req.query.to };
    }
    else {
        yurgani = req.query.yurgani;
    }
    if(!!req.query.from || !!req.query.to){
        narxi = { from: req.query.from, to: req.query.to };
    }
    else {
        narxi = req.query.narxi;
    }
    if(!!req.query.from){
        madel = { name: req.query.name };
    }
    else {
        madel = req.query.madel;
    }

    let options = {
        $gte: yili
    }
    let options1 = {
        $gte: yurgani,
    }
    let options2 = {
        $gte: narxi,
    }
    let options3 = {
        $regex: madel,
    }
    let foutcomes = await Mowina.find({
        yili: options,
        yurgani: options1,
        narxi: options2,
        madel: options3,
    })
    res.json(foutcomes)
}



// Avtomobil pagedagi filter
exports.agregat = async (req, res)=>{
    let yili, yurgani, narxi, madel, color, yoqilgi, transmission;
    if (!!req.query.from || !!req.query.to) {
        yili = { from: req.query.from, to: req.query.to};
    }
    else {
        yili = req.query.yili;
    }
    if(!!req.query.from || !!req.query.to){
        yurgani = { from: req.query.from, to: req.query.to };
    }
    else {
        yurgani = req.query.yurgani;
    }
    if(!!req.query.from || !!req.query.to){
        narxi = { from: req.query.from, to: req.query.to };
    }
    else {
        narxi = req.query.narxi;
    }
    if(!!req.query.from){
        madel = { name: req.query.name };
    }
    else {
        madel = req.query.madel;
    }
    if(!!req.query.from){
        color = { name: req.query.name };
    }
    else {
        color = req.query.color;
    }
    if(!!req.query.from){
        yoqilgi = { name: req.query.name };
    }
    else {
        yoqilgi = req.query.yoqilgi;
    }
    if(!!req.query.from){
        transmission = { name: req.query.name };
    }
    else {
        transmission = req.query.transmission;
    }

    let options = {
        $gte: yili
    }
    let options1 = {
        $gte: yurgani,
    }
    let options2 = {
        $gte: narxi,
    }
    let options3 = {
        $regex: madel,
    }
    let options4 = {
        $regex: color,
    }
    let options5 = {
        $regex: yoqilgi,
    }
    let options6 = {
        $regex: transmission,
    }
    let foutcomes = await Mowina.find({
        yili: options,
        yurgani: options1,
        narxi: options2,
        madel: options3,
        // color: options4,
        // yoqilgi: options5,
        // transmission: options6
    })
    res.json(foutcomes)
}
