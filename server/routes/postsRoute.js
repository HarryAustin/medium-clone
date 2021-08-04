const express = require('express');
const router = express.Router({ mergeParams:true }) //used to make id from middleware visible.
// const router = express.Router() //used to make id from middleware visible.
const { createController, 
        createPageController,
        followController,
        indexController,
        getArticle
     } = require('../controller/postsController');

const multer = require('multer'); // FOR MEDIA FILES/UPLOAD
const path = require('path');
const randomString = require('randomstring');


// Media setup
const storage = multer.diskStorage({
    destination:'media/thumbnail',
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}${randomString.generate({capitalization:'lowercase'})}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage:storage,
    limits:{
        filesize:1024*1024*5
    }
})
// END 



router.get('/', indexController);
router.get('/article/:id', getArticle);
router.get('/createPost', createPageController);
router.post('/create', upload.single('thumbnail'), createController)
router.post('/follow/:userId', followController)

module.exports = router;