import express from "express";
import Pantry from "../models/Pantry.js";
import randomRecipeModel from "../models/RandomRecipes.js";
import User from "../models/Users.js";

const router = express.Router();

router.get("/toTest", async (req, res) => {
  try {
    let result = await randomRecipeModel.findOne({ recipeId: 664270 }).exec();
    if (result) console.log(result);
  } catch (err) {
    console.log(err);
  }
});

router.post("/addPantry", (req, res) => {
  console.log(req.body);
});

export { router as apiCallsRoute };
