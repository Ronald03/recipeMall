import Typography from "@material-ui/core/Typography";
import { useContext, useEffect, useState } from "react";
import { randomRecipes } from "./apiCalls";
import RecipeCard from "./RecipeCard";
import { useStateValue } from "./StateProvider";

const style = {
  setCenter: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  rowContainer: {
    width: "75%",
    backgroundColor: "#cccccc",
  },
  fullWidth: {
    width: "100%",
  },
  recipeCardHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
};

function Home(props) {
  const [{ users }, dispatch] = useStateValue();

  const [listOfRecipes, setListOfRecipes] = useState({
    results: [],
  });

  useEffect(() => {
    const fetchRandom = async () => {
      const obj = await randomRecipes();
      console.log(obj);
      setListOfRecipes({ results: obj });
    };
    fetchRandom();
  }, []);

  return (
    <div className="home" style={style.setCenter}>
      <div
        className="home__rowcontainer"
        style={(style.setCenter, style.rowContainer)}
      >
        <div className="row--randomrecipes" style={style.fullWidth}>
          <Typography variant="h5" component="h4">
            Random
          </Typography>
          <div style={style.recipeCardHolder}>
            {listOfRecipes.results.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
        <div className="row--lunchrecipes" style={style.fullWidth}>
          <Typography variant="h5" component="h4">
            Lunch
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Home;
