const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    Productname: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
