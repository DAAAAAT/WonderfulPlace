const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true },
    destinations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination'}]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;