const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: { type: mongoose.Schema.Types.String, required: true }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;