const { User } = require("../models");

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

// get one account by id
const getOneAccount = async (req, res) => {
  try {
    const user = await User.findOneById(req.params.id)

    res.status(200).json(user);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
}

// login. get users account by email and password
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword
    })

    res.status(200).json(user)
    console.log("login working!!!")
  } catch (err) {
    console.log(`Error: ${err}`)
    res.status(500).json(err)
  }
}

// create new account
const createUser = async (req, res) => {
  try {
    const user = await User.create({
      userFirstName: req.body.userFirstName,
      userLastName: req.body.userLastName,
      userEmail: req.body.userEmail,
      userPassword: req.body.userPassword
    });

    res.status(200).json(user);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
};

module.exports = { createUser, getAllAccounts, getOneAccount, loginUser };
