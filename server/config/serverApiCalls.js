import axios from "axios";

export const randomRecipes = () => {
  const options = {
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    params: { number: "3" },
  };

  const result = axios
    .request(options)
    .then(function (response) {
      return response.data.recipes;
    })
    .catch(function (error) {
      console.error(error);
    });
  return result;
};

//module.exports = () => randomRecipes();
