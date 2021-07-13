import mongoose from "mongoose";

const PantrySchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  avalQuantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    default: "LB",
    enum: ["LB", "OZ", "Cups", "CT"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Pantry", PantrySchema);
