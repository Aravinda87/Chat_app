const express = require("express");
const { logincontroller, registercontroller } = require("../Controllers/Controllers");

const Router = express.Router()

Router.use("/login",logincontroller)
Router.use("/register",registercontroller)

module.exports = Router; 