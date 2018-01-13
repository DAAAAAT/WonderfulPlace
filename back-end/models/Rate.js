const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const rateSchema = new mongoose.Schema({
    rating: { type: mongoose.Schema.Types.Number, required: true }
});

const Rate = mongoose.model('Rate', rateSchema);

module.exports = Rate; 