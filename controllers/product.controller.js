const Product = require("../models/product.model.js"); //import ProductSchema

// Get All the products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

// Get single Product by ID
const getProduct = async (req, res) => {
  try {
    const { id } = req.params; //get id from url
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

// Adding Product in Database
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(
      req.body
    );
    res.status(200).json(product);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

// update a product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; //get id from url
    const product =
      await Product.findByIdAndUpdate(
        id,
        req.body
      );

    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found" });
    }
    // just insure that product is updated
    const updatedProduct = await Product.findById(
      id
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

// delete a Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; //get id from url
    const product =
      await Product.findByIdAndDelete(id);

    if (!product) {
      return res
        .status(404)
        .json({ message: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
