const mongoose = require('mongoose');

// connect mongoose to mongoDB
function init()
{
    const mongodb_url = process.env.MONGO_URL;
    mongoose.connect(mongodb_url);
}


module.exports = {init};