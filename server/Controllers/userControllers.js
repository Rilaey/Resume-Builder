const User = require("../models/index");

// get all accounts
const getAllAccounts = async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json(user);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
};

// create new account
const createUser = async (req, res) => {
  try {
    const user = await User.create({
      userFirstName: req.body.userFirstName,
      userLastName: req.body.userLastName,
      userEmail: req.body.userEmail,
      userPassword: req.body.password
    });

    res.status(200).json(user);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
};

module.exports = { createUser, getAllAccounts };
