import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Products", ProductsSchema);
