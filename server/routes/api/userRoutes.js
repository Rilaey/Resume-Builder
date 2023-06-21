const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllAccounts,
  getOneAccount,
  loginUser
} = require("../../Controllers/userControllers");

router.get("/allAccounts", getAllAccounts);

router.get("/oneAccount/:id", getOneAccount);

// create account
router.post("/createAccount", createUser);

// login with email and password
router.post("/loginUser", loginUser)


module.exports = router
