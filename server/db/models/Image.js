const mongoose = require('mongoose');
const {Schema, SchemaTypes, model} = mongoose;

const ImageSchema = new Schema({
    image: Buffer,
    encoding: String,
    mimetype: String
});

const Image = model('Images', ImageSchema);
module.exports = Image;