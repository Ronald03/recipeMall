/* Require express, dotenv, morgan */
//const express = require("express");
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
import { ensureAuth, ensureGuest } from "./middleware/auth.js";
import Scheduler from "./config/scheduler.js";
import myPassport from "./config/passport.js";
import { authRouter } from "./routes/auth.js";
import { pantryRouter } from "./routes/addIngredients.js";
//const Mongoose = require("mongoose");
//const session = require("express-session");
//const passport = require("passport");
//const dotenv = require("dotenv");
//const morgan = require("morgan");
//const cors = require("cors");
//const MongoStore = require("connect-mongo")(session);
//const connectDB = require("./config/db");
//const { ensureAuth, ensureGuest } = require("./middleware/auth.js");
//const Schedule = require("./config/scheduler");

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

/* Setting a scheduled task */
//require("./config/scheduler.js")();
//Schedule();

/* Get Morgan middleware t800-375-5283.== "development") {
  app.use(morgan("dev"));
}

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
app.use("/dash", pantryRouter);
//app.use("/dash", require("./routes/addIngredients.js"));

/* Get server to listen on specified Port */
const PORT = process.env.PORT || 5001;
app.listen(
  PORT,
  console.log(`server started on ${process.env.NODE_ENV} at port ${PORT}`)
);
