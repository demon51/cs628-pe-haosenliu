const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    additionalDetails: { type: String }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
