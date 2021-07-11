import express from "express";
import Pantry from "../models/Pantry.js";
import randomRecipeModel from "../models/RandomRecipes.js";

const router = express.Router();

router.get("/getRandom", async (req, res) => {
  try {
    let result = await randomRecipeModel.aggregate([{ $sample: { size: 3 } }]);
    if (result) console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

router.post("/addPantry", (req, res) => {
  console.log(req.body);
});

export { router as apiCallsRoute };
