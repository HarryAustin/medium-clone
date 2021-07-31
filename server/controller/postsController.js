const userModel = require('../model/user');
const postModel = require('../model/posts');

const indexController = async (req, res) => {
    try{
        // The index Controller handles the posts of followers a logged user has.
        const loggedId = req.params.loggedId;
        const followersId = await userModel.findById(loggedId, {"followers":1, _id:0});
        const { followers } = followersId
        const userFollowedPosts = await postModel.find({user:{$in:followers}});
        res.json({ user: userFollowedPosts })
    }catch(err){
        console.log(err)
    }
}

const createController = async (req, res) => {
    try{
        let userId = req.params.loggedId
        if(req.file){
            req.body.thumbnail = req.file.path;
        }
        if(userId){
            req.body.user = userId;
        }
        console.log(req.body)
        console.log(req.file)
        const result = await postModel.create(req.body);
        const updatedUser = await userModel.findByIdAndUpdate(userId, {
            $push:{
                posts:result
            }
        }, {new:true});
        res.json({
            postResult:result,
            updatedUserPosts: {_id: updatedUser._id, posts: updatedUser.posts}
        })
    }catch(err){
        console.log(err)
    }
}


const followController = async (req, res) => {
    try{
        const loggedId = req.params.loggedId;
        const userToFollowId = req.params.userId;
        const mainUser = await userModel.findById(loggedId)
        const mainUserFollowing = mainUser.following;
        const secondUser = await userModel.findById(userToFollowId);
        const secondUserFollowers = secondUser.followers;
        if(mainUserFollowing.includes(userToFollowId)){
            return res.json({
                message:'Already following this user'
            })
        }else if (secondUserFollowers.includes(loggedId)){
            return res.json({
                message: 'You are following user already'
            })
        }
        else{
            const followUser = await userModel.findByIdAndUpdate(userToFollowId, {
                $push:{
                    followers:loggedId
                }
            }, {new:true});
            const loggedFollowing = await userModel.findByIdAndUpdate(loggedId, {
                $push:{
                    following:userToFollowId
                }
            }, {new:true})
            res.json({
                following: loggedFollowing,
                followUser: followUser
            })
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createController,
    followController,
    indexController,
}