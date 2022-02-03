const express = require("express");
const router = express.Router();

const controller = require("../controllers/player-controller");
const ensureAuthenticated = require("../middleware/ensure-autheticated.js");

router.post("/",  controller.post);
router.get("/",ensureAuthenticated, controller.get);
router.put("/:id",ensureAuthenticated, controller.put);
router.delete("/:id",ensureAuthenticated, controller.delete);

module.exports = router;