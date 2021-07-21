import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { fallBackImage } from "./constant.js";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 250,
  },
});

function RecipeCard({ recipe }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Recipe Image"
          height="200"
          image={recipe.image ? recipe.image : fallBackImage}
          title={recipe.title}
        />

        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="h5">
            <strong>{recipe.title}</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RecipeCard;
