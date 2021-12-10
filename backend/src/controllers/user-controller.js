const User = require("../models/user-models");
const UserService = require("../services/user-service");
var userService = new UserService();

exports.get = async (req, res) => {
  res.json(await userService.getAll());
}

exports.getByUsername = async (req, res) => {
  res.json(await userService.getByUsername(req.query.username));
}

exports.getById = async (req, res) => {
  res.json(await userService.getById(req.params.id));
}

exports.post = async (req, res) => {
  const value = await userService.add(new User(req.body.username, req.body.password, req.body.email, req.body.isAdmin));
  if (!value)
    res.send({ success: false })
  else {
    res.json({ success: true, ...value });
  }
}