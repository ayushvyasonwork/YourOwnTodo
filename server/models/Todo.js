const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50
    },
    description: {  // Fixed typo here
        type: String,
        required: true,
        maxLength: 50
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now  // Fixed typo here
    }
});
module.exports = mongoose.model('Todo', todoSchema);
