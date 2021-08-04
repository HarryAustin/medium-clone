const userModel = require('../model/user');
const postModel = require('../model/posts');


const indexController = async (req, res) => {
    try{
        // The index Controller handles the posts of followers a logged user has.
        const loggedId = req.params.loggedId;
        const followersId = await userModel.findById(loggedId, {"followers":1, _id:0});
        const { followers } = followersId
        const posts = await postModel.find({user:{$in:followers}}, null, {sort:{timePosted:'-1'}}).lean();
        const indexArticle = {
            loggedId:loggedId,
            posts:posts
        }
        res.render('main', { layout:false, indexArticle:indexArticle })
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
        const result = await postModel.create(req.body);
        const updatedUser = await userModel.findByIdAndUpdate(userId, {
            $push:{
                posts:result
            }
        }, {new:true});
        res.redirect(`createPost`)
    }catch(err){
        console.log(err)
    }
}


const createPageController = async (req, res) => {
    const loggedId = req.params.loggedId;
    res.render('createBlog', {layout:false, loggedId:loggedId})
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


const getArticle = async (req, res) => {
    const articleId = req.params.id;
    const loggedId = req.params.loggedId;
    const article = await postModel.findById(articleId).lean()
    const userArticle = await userModel.findById(article.user).lean()
    const followersId = await userModel.findById(loggedId, {"followers":1, _id:0});
    const { followers } = followersId;
    const otherRelatedPost = await postModel.find({$and: [{user:{$in:followers}}, {_id:{$ne:articleId}}]}).lean();
    const getArticle = {
        article:article, 
        relatedPosts:otherRelatedPost, 
        userArticle:userArticle,
        loggedId: loggedId
    }
    res.render('Article', {layout:false, getArticle:getArticle})
}


module.exports = {
    createController,
    createPageController,
    followController,
    indexController,
    getArticle
}