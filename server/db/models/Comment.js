const mongoose = require('mongoose');
const {Schema, SchemaTypes, model} = mongoose;

const CommentSchema = new Schema({
    text: String,
    post: {
        type: SchemaTypes.ObjectId,
        ref: 'Posts'
    },
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'Users'
    },
    edit_user: {
        type: SchemaTypes.ObjectId,
        ref: 'Users'
    }
}, {timestamps: true});

const Comment = model('Comments', CommentSchema);
module.exports = Comment;