import mongoose from "mongoose";

export const recordSpecifics = (recipe) => {
  const x = {
    _id: recipe.id,
    analyzedInstructions: recipe.analyzedInstructions,
    cuisines: recipe.cuisines,
    dairyFree: recipe.dairyFree,
    diets: recipe.diets,
    dishTypes: recipe.dishTypes,
    extendedIngredients: recipe.extendedIngredients,
    glutenFree: recipe.glutenFree,
    healthScore: recipe.healthScore,
    image: recipe.image,
    occasions: recipe.occasions,
    readyInMinutes: recipe.readyInMinutes,
    servings: recipe.servings,
    sourceName: recipe.sourceName,
    sourceUrl: recipe.sourceUrl,
    summary: recipe.summary,
    title: recipe.title,
    vegan: recipe.vegan,
    vegetarian: recipe.vegetarian,
    veryHealthy: recipe.veryHealthy,
    weightWatcherSmartPoints: recipe.weightWatcherSmartPoints,
    ingredientList: recipe.ingredientList,
  };
  return x;
};

const randomRecipesSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  analyzedInstructions: {
    type: [],
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
  ingredientList: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("randomRecipes", randomRecipesSchema);
