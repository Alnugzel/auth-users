const {
  getAll,
  create,
  getOne,
  remove,
  update,
  verifyUser,
  login,
  logged,
} = require("../controllers/user.controllers");
const express = require("express");
const { verifyJWT } = require("../utils/verify");

const routerUser = express.Router();

routerUser.route("/").get(getAll).post(create);
routerUser.route("/me").get(verifyJWT, logged);
routerUser.route("/login").post(login);

//-----------------------
routerUser.route("/verify/:code").get(verifyUser);
routerUser.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerUser;
