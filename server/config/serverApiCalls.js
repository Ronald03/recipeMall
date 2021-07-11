import axios from "axios";

export const randomRecipes = () => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    },
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    params: { number: "10" },
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
