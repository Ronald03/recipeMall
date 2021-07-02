import express from "express";
import { ensureAuth, ensureGuest } from "../middleware/auth.js";
import Pantry from "../models/Pantry.js";

const router = express.Router();

router.post("/toTest", (req, res) => {
  console.log("into Test: ");
  console.log(req);
});

router.post("/addPantry", (req, res) => {
  console.log(req.body);
  /* try {
    req.body.user = req.user.id;
    Pantry.create(req.body);
  } catch (err) {
    console.log(err);
  } */
});

export { router as pantryRouter };
//module.exports = router;
