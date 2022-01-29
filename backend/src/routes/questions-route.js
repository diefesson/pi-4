const express = require("express");
const router = express.Router();

const controller = require("../controllers/questions-controller");

router.post("/", controller.post);
router.get("/", controller.getByPlayerId);
router.get("/:id", controller.getById);
router.get("/:id/isCorrect/:answerId", controller.isCorrect);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;