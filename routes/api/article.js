const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles"
router.route("/")
//   .get(articleController.findAll)

module.exports = router;
