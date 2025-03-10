const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
  recipe: {
    type: String,
    required: true,
  },
  ingredients: { type: Map, of: String, required: true },
  methods: { type: Map, of: String, required: true },
});

const Recipe = mongoose.Model("Recipe", recipesSchema, "recipes");

module.exports = Recipe;
