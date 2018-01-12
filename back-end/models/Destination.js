const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const destiantionSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true },
    thumbnail: { type: mongoose.Schema.Types.String },
    latitude: { type: mongoose.Schema.Types.Number, required: true },
    longitude: { type: mongoose.Schema.Types.Number, required: true },
    city: { type: mongoose.Schema.Types.String, required: true },
    country: { type: mongoose.Schema.Types.String, required: true },
    description: { type: mongoose.Schema.Types.String },
    author: { type: mongoose.Schema.Types.String, required: true },
    comments: [{ type: mongoose.Schema.Types.String }],
    category: { type: ObjectId, ref: 'Category', required: true },
    rating: { type: mongoose.Schema.Types.Number }
});

const Destination = mongoose.model('Destination', destiantionSchema);

module.exports = Destination;