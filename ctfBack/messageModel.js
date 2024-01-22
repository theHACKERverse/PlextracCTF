const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    id: Number,
    name: String,
    body: String
})

const Message = mongoose.model('Message', messageSchema);

module.exports = { Message };