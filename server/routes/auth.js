/* const router = require("express").Router();
const passport = require("passport");
const { ensureAuth } = require("../middleware/auth.js"); */
import express from "express";
import passport from "passport";
import { ensureAuth, ensureGuest } from "../middleware/auth.js";

const router = express.Router();

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    //console.log("REQ FROM PASSPORT: ", req.user);
    res.redirect("http://localhost:3000/");
  }
);

router.get("/success", ensureAuth, (req, res) => {
  console.log("In To Test");
  console.log(req.user);

  res.json({
    authenticated: true,
    message: "the response",
    user: req.user,
  });
});

router.get("/toTest", (req, res) => {
  console.log(req.user.id);
});

router.get("/logout", ensureAuth, (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000/");
});

export { router as authRouter };
//module.exports = router;

// localhost:5000/auth/logout
// localhost:5000/auth/google
