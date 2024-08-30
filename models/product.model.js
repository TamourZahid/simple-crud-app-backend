const mongoose = require("mongoose"); // importing mongoose

// defines the structure of the documents within the Product collection in MongoDB
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [
        true,
        "Please enter product name",
      ],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, //This option automatically adds createdAt and updatedAt fields to the schema.
  }
);
//Createing the Product model
const Product = mongoose.model(
  "Product",
  ProductSchema
);

// Export the Product model
module.exports = Product;
