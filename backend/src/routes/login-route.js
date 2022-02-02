const express = require("express");
const router = express.Router();

const playerController = require("../controllers/player-controller.js");

router.post("/", playerController.login);

module.exports = router;