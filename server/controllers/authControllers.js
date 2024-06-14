const dotenv = require("dotenv");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const axios = require("axios");

dotenv.config({
  path: "../.env",
});

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name) {
      throw new Error("name is required");
    }
    if (!email) {
      throw new Error("email is required");
    }

    if (!password || password.length < 6) {
      throw new Error("password must be more than 6 characters");
    }

    if (password !== confirmPassword) {
      throw new Error("password does not match");
    }

    const exist = await User.findOne({ email });
    if (exist) {
      throw new Error("email already exist");
    }

    const user = await User.create({ name, email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("email is required");
    }
    if (!password) {
      throw new Error("enter your password");
    }

    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      // httpOnly: true,
      maxAge: 1,
    });
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  let id = req.body.productsID;
  const options = {
    method: "GET",
    url: `${process.env.AMAZON_URL}/products-by-category`,
    params: {
      category_id: `${id}`,
      page: "1",
      country: "US",
      sort_by: "RELEVANCE",
      product_condition: "ALL",
    },
    headers: {
      "x-rapidapi-key": `${process.env.AMAZON_KEY}`,
      "x-rapidapi-host": `${process.env.AMAZON_HOST}`,
    },
  };
  try {
    const response = await axios.request(options);

    res.status(200).json({
      status: "success",
      data: response.data.data.products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};

const getSingleProduct = async (req, res) => {
  let id = req.body.singleID;

  console.log("id", id);
  const options = {
    method: "GET",
    url: `${process.env.AMAZON_URL}/product-details`,
    params: {
      asin: `${id}`,
      country: "US",
    },
    headers: {
      "x-rapidapi-key": `${process.env.AMAZON_KEY}`,
      "x-rapidapi-host": `${process.env.AMAZON_HOST}`,
    },
  };
  try {
    const response = await axios.request(options);

    res.status(200).json({
      status: "success",
      data: response.data.data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};

const searchProducts = async (req, res) => {
  let search = req.body.search;
  const options = {
    method: "GET",
    url: `${process.env.AMAZON_URL}/search`,
    params: {
      query: `${search}`,
      page: "1",
      country: "US",
      sort_by: "RELEVANCE",
      product_condition: "ALL",
    },
    headers: {
      "x-rapidapi-key": `${process.env.AMAZON_KEY}`,
      "x-rapidapi-host": `${process.env.AMAZON_HOST}`,
    },
  };

  try {
    const response = await axios.request(options);
    res.status(200).json({
      status: "success",
      data: response.data.data.products,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: error.message,
    });
  }
};

const AddToCart = async (req, res) => {
  let cartValue = req.body.cartValue;
  let id = req.body.id;
  try {
    const query = await User.findByIdAndUpdate(id, { cart: cartValue });
    res.status(201).json({ status: "success", data: query });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      data: err.message,
    });
  }
};

module.exports = {
  signUp,
  loginUser,
  logoutUser,
  getAllProducts,
  getSingleProduct,
  searchProducts,
  AddToCart,
};
