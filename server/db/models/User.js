const mongoose = require('mongoose');
const {Schema, SchemaTypes, model} = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'username required.'],
        minLength: [4, 'username too short.'],
        maxLength: [32, 'username too long.'],
        validate: {
            validator: function(name) {
                return /^[a-zA-Z0-9]{4,32}$/.test(name);
            }
        }
    },
    password: {
        type: String,
        required: [true, 'password required.']
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user']
    },
    image: {
        type: SchemaTypes.ObjectId,
        ref: 'Images'
    }
}, {
    timestamps: true
});

const User = model('Users', UserSchema);
module.exports = User;