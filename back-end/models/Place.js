const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    images: [{ type: mongoose.Schema.Types.String }],
    latitude: { type: mongoose.Schema.Types.Number, required: true },
    longitude: { type: mongoose.Schema.Types.Number, required: true },
    country: { type: mongoose.Schema.Types.String, required: true },
    city: { type: mongoose.Schema.Types.String, required: true },
    description: { type: mongoose.Schema.Types.String },
    // author: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    author: { type: mongoose.Schema.Types.String, required: true },
    comments: [{ type: mongoose.Schema.Types.String }],
    likes: { type: mongoose.Schema.Types.Number },
    category: { type: mongoose.Schema.Types.String, required: true },
    rating: { type: mongoose.Schema.Types.Number }
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;