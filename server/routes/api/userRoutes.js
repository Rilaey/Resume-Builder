const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllAccounts,
  getOneAccount
} = require("../../Controllers/userControllers");

router.get("/allAccounts", getAllAccounts);

router.get("/oneAccount/:id", getOneAccount);

router.post("/createAccount", createUser);


module.exports = router
