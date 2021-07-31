
const express = require('express');
const { createUserController, 
        updateUserController,
        usersController
    } = require('../controller/userController')
const multer = require('multer'); // FOR MEDIA FILES/UPLOAD
const path = require('path');
const randomString = require('randomstring');
const router = express.Router();


// Media setup
const storage = multer.diskStorage({
    destination:'media/profile-picture',
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


router.post('/', upload.single('upload'), createUserController);
router.post('/update/:id', upload.single('upload'), updateUserController);
router.get('/', usersController);





module.exports = router;