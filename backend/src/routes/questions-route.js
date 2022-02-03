const express = require("express");
const router = express.Router();

const controller = require("../controllers/questions-controller");
const ensureAuthenticated = require("../middleware/ensure-autheticated.js");

router.post("/",ensureAuthenticated, controller.post);
router.get("/", ensureAuthenticated, controller.getByPlayerId);
router.get("/:id", ensureAuthenticated, controller.getById);
router.get("/:id/isCorrect/:answerId", ensureAuthenticated, controller.isCorrect);
router.put("/:id",ensureAuthenticated, controller.put);
router.delete("/:id",ensureAuthenticated, controller.delete);

module.exports = router;