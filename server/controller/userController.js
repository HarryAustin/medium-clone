const userModel = require('../model/user')
const { ErrorHandler } = require('../services/errorHandler');

const createUserController = async (req, res) => {
    try{
        const user = await userModel.create(req.body);
        res.status(201).json({user:user, message:'success'})
    }catch(err){
        console.log(err.message)
        const errors = ErrorHandler(err);
        res.status(400).json({errors:errors})
    }
}

const updateUserController = async (req, res) => {
    try{
        const userId = req.params.id;
        if(req.file){
            const user = await userModel.findByIdAndUpdate(userId, {
                $set:{
                    profilePicture:req.file.path
                }
            }, {new:true})
        }
        const user = await userModel.findByIdAndUpdate(userId, req.body, {new:true})
        res.status(200).json({updatedUser: user })
    }catch(err){
        const errors = ErrorHandler(err);
        res.status(400).json({ errors : errors })
    }

}

const usersController = async (req, res) => {
    try{
        const users = await userModel.find();
        res.status(200).json({users:users})
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createUserController,
    updateUserController,
    usersController
}