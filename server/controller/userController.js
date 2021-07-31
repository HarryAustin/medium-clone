const userModel = require('../model/user')
const { ErrorHandler } = require('../services/errorHandler');

const createUserController = async (req, res) => {
    try{
        // i have to check if a file is uploaded as well
        let profilePicture = null;
        if(req.file){
            profilePicture = req.file.path
        }
        const user = await userModel({
            name:req.body.name,
            username:req.body.username,
            profilePicture:profilePicture
        })
        user.save()
        // res.status(200).json({user:userData, message:'success'})
        res.json({user:user, message:'success'})
    }catch(err){
        console.log(err.message)
        const errors = ErrorHandler(err);
        res.status(400).json({errors:errors})
    }
}

const updateUserController = async (req, res) => {
    try{
        if(req.file){
            req.body.profilePicture = req.file.path
        }
        const userId = req.params.id;
        const user = await userModel.findByIdAndUpdate(userId, req.body, {new:true})
        res.status(200).json({updatedUser: user, message:"updated"})
    }catch(err){
        console.log(err.message)
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