let mongoose = require("mongoose");

// TOY Schema
const toy = mongoose.model("toy", {
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

module.exports = { toy };
