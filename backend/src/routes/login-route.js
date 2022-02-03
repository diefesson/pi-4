
const express = require("express");
const router = express.Router();

const playerController = require("../controllers/player-controller.js");

router.post("/login", playerController.login);
router.post("/logout", playerController.logout);

module.exports = router;


