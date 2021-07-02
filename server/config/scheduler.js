//import { randomRecipes } from "./config/serverApiCalls.js";
import toadScheduler from "toad-scheduler";
//const { ToadScheduler, SimpleIntervalJob, Task } = require("toad-scheduler");

export default function Scheduler() {
  /* const fetchRandom = async () => {
  const obj = await randomRecipes();
  console.log(obj);
  setListOfRecipes({ results: obj });
};
 */
  const shdlr = toadScheduler.ToadScheduler();

  const task = toadScheduler.Task("simple task", () => {
    console.log("Printing a Task");
  });
  const job = toadScheduler.SimpleIntervalJob({ seconds: 10 }, task);

  const schedule = () => shdlr.addSimpleIntervalJob(job);

  Schedule();
}

/* module.exports = () => {
  Schedule();
}; */
