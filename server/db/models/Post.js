const mongoose = require('mongoose');
const {Schema, SchemaTypes, model} = mongoose;

const PostSchema = new Schema({
    title: String,
    text: String,
    code_body: String,
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'Users'
    },
    edit_user: {
        type: SchemaTypes.ObjectId,
        ref: 'Users'
    },
    cached_vote_count: {
        type: Number,
        default: 0
    },
    editedAt: {
        type: Date
    }
}, {timestamps: true});

const Post = model('Posts', PostSchema);
module.exports = Post;