import Typography from "@material-ui/core/Typography";
import CachedIcon from "@material-ui/icons/Cached";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { useStateValue } from "./StateProvider";

const style = {
  refreshList: {
    cursor: "pointer",
  },
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
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
  //const [{ users }, dispatch] = useStateValue();

  const [listOfRecipes, setListOfRecipes] = useState({
    list: [],
  });

  const fetchRandomRecipes = () => {
    fetch("http://localhost:5000/db/getRandom")
      .then((response) => response.json())
      .then((recipeList) => {
        setListOfRecipes({ list: recipeList });
      });
  };

  useEffect(() => {
    // Fetch random recipes from server
    fetchRandomRecipes();
    console.log(listOfRecipes);
  }, []);

  return (
    <div className="home" style={style.setCenter}>
      <div
        className="home__rowcontainer"
        style={(style.setCenter, style.rowContainer)}
      >
        <div className="row--randomrecipes" style={style.fullWidth}>
          <div style={style.sectionHeader}>
            <Typography variant="h5" component="h4">
              Random
            </Typography>
            <div style={style.refreshList}>
              <CachedIcon onClick={fetchRandomRecipes} />
            </div>
          </div>

          <div style={style.recipeCardHolder}>
            {listOfRecipes.list.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
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
