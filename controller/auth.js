const Auth = require("../models/auth")
const jwt = require("jsonwebtoken")


exports.UserCreate ={
    add:async(req, res, next)=>{
        if(!Auth){
            console.log("body kelmadi")
        }else{
            const user = new Auth({...req.body})
            await user.save()
            res.json({success: true, data: user})
        }
}

}

exports.UserGetById = async(req, res, next)=>{
    try{
        const user = await Auth.findById({_id: req.params.id})
        res.json({
            success: true,
            data: user
        })
    }catch(err){
       next(err)
    }
}

exports.UserGetAll = async(req, res, next)=>{
    try{
        const user = await Auth.find({}).sort({date: -1})
        res.status(200).json({
            success: true,
            data: user
        })
    }catch(err){
       next(err)
    }
}


exports.UserUpdate = async(req, res, next)=>{
    try{
            const user = new User.findByIdAndUpdate(req.params.id, {
                ...req.body
            })
        res.status(200).json({
            success: true,
            data: user
        })
    }catch(err){
       next(err)
    }
}


exports.UserDelete = async(req, res, next)=>{
    try{
        const user = await Auth.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success: true,
            data: []
        })
    }catch(err){
       next(err)
    }
}

exports.UserLogin = async function(req, res, next){
    try {
        const {email, password} = req.body;
    if(!email){
        console.log("gmail err");
    }
     if(!password){
        console.log("password err");
    }
    const result = await Auth.findOne({email: email}).select("password")
    if(!result){
        console.log("err")
    }else{
        jwt.sign({result}, "SecretKey", {expiresIn: "3000s"}, (err, token)=>{
        res.json({
            token: token
        })
    })
    }
    } catch (err) {
        next(err)
    }
}



exports.Protected = async(req, res, next)=>{
    jwt.verify(req.token, "SecretKey", function(err, data){
        if(err){
            res.status(403)
        }else{
            res.json({data: data})
        }
    })
}



exports.verifyToken = async(req, res, next)=>{
    try {
        const bearerHeader = req.headers['authorization']
        if(typeof bearerHeader != "undefined"){
            const bearer = bearerHeader.split(' ')
            const bearerToken = bearer[1]
            req.token = bearerToken
            next()
        }else{
            res.status(403)
        }
    } catch (err) {
        console.log("err")
    }
}
