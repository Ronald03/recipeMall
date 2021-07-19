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
    params: { number: "15" }, //request 15 recipes per call
  };

  const result = axios(options)
    .then((response) => {
      return response.data.recipes;
    })
    .catch((error) => {
      console.log(`This error was generated in serverApiCalls`);
      console.log(error.name);
      console.log(error.message);
    });
  return result;
};
