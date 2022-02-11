const express = require("express");
const router = express.Router();

const gameController = require("../controllers/game-controller.js");
const ensureAuthenticated = require("../middleware/ensure-autheticated.js");

router.get("/", ensureAuthenticated, gameController.post);

module.exports = router;