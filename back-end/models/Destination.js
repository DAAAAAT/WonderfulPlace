const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const destiantionSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true },
    thumbnail: { type: mongoose.Schema.Types.String },
    article: { type: ObjectId, ref: 'Article' },
    latitude: { type: mongoose.Schema.Types.Number, required: true },
    longitude: { type: mongoose.Schema.Types.Number, required: true },
    rating: { type: mongoose.Schema.Types.Number }
});

const Destination = mongoose.model('Destination', destiantionSchema);

module.exports = Destination;