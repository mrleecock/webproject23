const mongoose = require('mongoose');
const {Schema, SchemaTypes, model} = mongoose;

const VoteSchema = new Schema({
    value: {
        type: Number,
        enum: [-1, 1]
    },
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    },
    post: {
        type: SchemaTypes.ObjectId,
        ref: 'Post'
    },
});

const Vote = model('Votes', VoteSchema);
module.exports = Vote;