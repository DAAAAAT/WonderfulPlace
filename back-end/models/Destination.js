const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const destiantionSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true },
    images: { type: mongoose.Schema.Types.String },
    latitude: { type: mongoose.Schema.Types.Number, required: true },
    longitude: { type: mongoose.Schema.Types.Number, required: true },
    city: { type: mongoose.Schema.Types.String, required: true },
    country: { type: mongoose.Schema.Types.String, required: true },
    description: { type: mongoose.Schema.Types.String },
    author: { type: ObjectId, ref: 'User', required: true },
    comments: [{ type: ObjectId, ref: 'Comment' }],
    category: { type: ObjectId, ref: 'Category', required: true },
    ratings: [{ type: mongoose.Schema.Types.Mixed, require: true }],
    ratingSum: { type: mongoose.Schema.Types.Number, required: true },
    averageRating: { type: mongoose.Schema.Types.Number, required: true }
});

const Destination = mongoose.model('Destination', destiantionSchema);

module.exports = Destination;