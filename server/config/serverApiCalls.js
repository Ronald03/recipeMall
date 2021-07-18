import axios from "axios";
import Products from "../models/Products.js";
import { capitalize } from "../utilities.js";

export const randomRecipes = () => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    },
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    params: { number: "1" }, //request 10 recipes per call
  };

  const result = axios(options)
    .then((response) => {
      return response.data.recipes;
    })
    .catch((error) => {
      console.error(error);
    });
  return result;
};
