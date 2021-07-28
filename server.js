const bodyParser = require('body-parser');
const connectDB = require('./server/database/database');
const dotenv = require('dotenv');
const express = require('express');
const hbs = require('express-handlebars');
const morgan = require('morgan');
// const multer = require('multer'); // FOR MEDIA FILES/UPLOAD
const path = require('path')
// const randomString = require('randomstring');
// For Routes
const userRouter = require('./server/routes/usersRoute');

// ----- SETTINGS-------//

//express setup
const app = express();

// enviroment variables config
dotenv.config( { path:'config.env' } )

// Body Parser config
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())

// Morgan setup
app.use(morgan('tiny'))


// View engine
app.set('view engine', 'hbs')
app.engine('hbs', hbs({extname:'hbs'}))

// Assets setup
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/fonts', express.static(path.resolve(__dirname, 'assets/fonts')))
// It has to be the same with the folder you are keeping the file.
// to access images in frontend has to be img/nshsj.png

// Media middleware
app.use('/uploads', express.static(path.resolve(__dirname, 'media/profile-picture')));

// Port setupp
const PORT = process.env.PORT || 8080;

// URL SETUP
app.use('/api/users', userRouter)
app.get('/', (req, res) => {
    res.render('main', {layout:false});
}) // For my base page
// Decided not to use layouts
// My media are still not sorted in the frontend, so i will fix that.
// To access media files or static files in browser, just use the path in the middleware and the name of the file.
// Also for our user logic for logged in users, i will create a route middleware for post/template required stuff, 
// But in the middleware url, i will make it "app.use(/posts/:id", postsRouter)
//------ END SETTINGS-----//


// DATABASE CONNECTION
connectDB(() =>
    // SERVER LISTENING.....
    app.listen(PORT, async () => console.log(`Server is running at http://localhost:${PORT}`))
)

