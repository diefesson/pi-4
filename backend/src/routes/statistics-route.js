const express = require("express");
const router = express.Router();

const controller = require("../controllers/statistics-controller.js");
const ensureAuthenticated = require("../middleware/ensure-autheticated.js");

router.get("/",ensureAuthenticated, controller.get);
router.post("/",ensureAuthenticated, controller.post);
router.put("/:id",ensureAuthenticated, controller.put);
router.delete("/:id",ensureAuthenticated, controller.delete);

module.exports = router;