import axios from "axios";
const RAPIDAPI_kEY = "09934ca9b1msh57dae5fbe8ed3dcp1aefa4jsn2e9ac6423857";
const RAPIDAPI_HOST = "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com";

const instance = axios.create({
  method: "GET",
  headers: {
    "x-rapidapi-key": RAPIDAPI_kEY,
    "x-rapidapi-host": RAPIDAPI_HOST,
  },
});

export const addPantryRequest = axios.create({
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance;
