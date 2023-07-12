const mongoose = require('mongoose');

const ApiSchema = new mongoose.Schema({
    name: { type: String, required: true },
    responseStructure: [{ key: String, type: String }],
    numRecords: { type: Number, default: 1 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Api', ApiSchema);
