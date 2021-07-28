const mongoose = require('mongoose');

const connection = async (cb) => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            'useCreateIndex':true,
            'useFindAndModify':false,
            'useNewUrlParser':true,
            'useUnifiedTopology':true
        });
        console.log(`MongoDb connected succesfully at ${connect.connection.host}`)
        cb();
    }
    catch(err) {
        console.log(err);
        process.exit(0);
    }
}

module.exports = connection;