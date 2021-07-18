import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Products", ProductsSchema);
