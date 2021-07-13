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
    params: { number: "10" }, //request 10 recipes per call
  };

  const result = axios(options)
    .then((response) => {
      //This piece of code filter the ingredients from every
      //recipe that is sent from the API. every Ingredient is store
      //in a collection on MongoDB
      let holdIngredients = []; // This array will hold a list of Arrays containing ingredient name and ID

      let idCheck = []; //This will hold the ingredients ID

      const recipeListing = response.data.recipes; //save a copy of the list of recipes

      recipeListing.map((eachRecipe) => {
        // loop through the recipes
        eachRecipe.analyzedInstructions[0].steps.map((step) => {
          step.ingredients.map(async (ingredient) => {
            if (!idCheck.includes(ingredient.id) && ingredient.id !== 0) {
              idCheck.push(ingredient.id);
              holdIngredients.push([ingredient.name, ingredient.id]);
              try {
                let product = await Products.findOne({
                  productId: ingredient.id,
                });

                if (!product) {
                  //capitalize first letter of every word with capitalize()
                  await Products.create({
                    productId: ingredient.id,
                    name: capitalize(ingredient.name),
                  });
                }
              } catch (err) {
                console.log(err);
              }
            }
          });
        });
      });

      return response.data.recipes;
    })
    .catch((error) => {
      console.error(error);
    });
  return result;
};
