const mongoose = require("mongoose");

const randomRecipesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  analyzedInstructions: {
    type: Array,
    required: true,
  },
  cuisines: {
    type: Array,
    required: true,
  },
  dairyFree: {
    type: Boolean,
    default: false,
  },
  diets: {
    type: Array,
  },
  dishTypes: {
    type: Array,
  },
  extendedIngredients: {
    type: Array,
  },
  glutenFree: {
    type: Boolean,
  },
  healthScore: {
    type: Number,
  },
  image: {
    type: String,
  },
  occasions: {
    type: Array,
  },
  readyInMinutes: {
    type: Number,
  },
  servings: {
    type: Number,
  },
  sourceName: {
    type: String,
  },
  sourceUrl: {
    type: String,
  },
  summary: {
    type: String,
  },
  title: {
    type: String,
  },
  vegan: {
    type: Boolean,
  },
  vegetarian: {
    type: Boolean,
  },
  veryHealthy: {
    type: Boolean,
  },
  weightWatcherSmartPoints: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("randomRecipes", randomRecipesSchema);
