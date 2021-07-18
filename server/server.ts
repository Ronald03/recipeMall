import express from "express";
import Mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import MongoSt from "connect-mongo";
const MongoStore = MongoSt(session);
import connectDB from "./config/db.js";
import myPassport from "./config/passport.js";
import { authRouter } from "./routes/auth.js";
import { apiCallsRoute } from "./routes/dbCalls.js";
import { ToadScheduler, SimpleIntervalJob, Task } from "toad-scheduler";
import { randomRecipes } from "./config/serverApiCalls.js";
import randomRecipeModel, { recordSpecifics } from "./models/RandomRecipes.js";
import Products from "./models/Products.js";
import { capitalize } from "./utilities.js";

/* add Local variables */
dotenv.config({ path: "./config/config.env" });

/* Add the passport config strategy */
myPassport(passport);
//require("./config/passport.js")(passport);

/* Initialize express App */
const app = express();

// Body parses
app.use(express.urlencoded({ exteded: false }));
app.use(express.json());

/* Adding CORS */
app.use(cors());

/* connect with Database */
connectDB();

/* Schedule an API call to get random recipes every 24hrs */
const scheduler = new ToadScheduler();

const task = new Task("Get Random recipes", () => {
  const fetchRandom = async () => {
    try {
      let storeIngredientList: object[] = [];
      let storeRecipeId: object[] = [];
      let storeIngAndId: object[] = [];
      let ingName: String;

      const objList = await randomRecipes();
      objList.forEach((recipe) => {
        recipe.analyzedInstructions[0].steps.forEach((step) => {
          step.ingredients.forEach((ingredient) => {
            if (!storeRecipeId.includes(ingredient.id) && ingredient.id !== 0) {
              ingName = capitalize(ingredient.name);
              storeRecipeId.push(ingredient.id);
              storeIngAndId.push([ingName, ingredient.id]);
              storeIngredientList.push(ingName);

              Products.create({
                _id: ingredient.id,
                name: ingName,
              });
            }
          });
        });
        recipe["ingredientList"] = storeIngredientList;
        randomRecipeModel.create(recordSpecifics(recipe));
      });
    } catch (err) {
      console.log("Error generated on Server Scheduled Task...");
      console.error(err);
    }
  };
  fetchRandom();
});

scheduler.addSimpleIntervalJob(new SimpleIntervalJob({ seconds: 25 }, task));

/* Get Morgan middleware === "development") {
  app.use(morgan("dev"));
} */

/* Session middleware */
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: Mongoose.connection }),
  })
);

/* Passport Middleware */
app.use(passport.initialize());
app.use(passport.session());

/* Add routes */
//app.use("/auth", require("./routes/auth.js"));
app.use("/auth", authRouter);
app.use("/db", apiCallsRoute);

//app.use("/dash", require("./routes/addIngredients.js"));

/* Get server to listen on specified Port */
const PORT = process.env.PORT || 5001;
app.listen(
  PORT,
  console.log(`server started on ${process.env.NODE_ENV} at port ${PORT}`)
);
