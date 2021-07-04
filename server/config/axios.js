import axios from "axios";

const instance = axios.create({
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.RAPIDAPI_HOST,
  },
});

const test = () => {
  return process.env.RAPIDAPI_KEY;
};

export default instance;
