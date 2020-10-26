var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json([
    { board: "Board1", content: "content of board 1" },
    { board: "Board2", content: "content of board 2" },
    { board: "Board3", content: "content of board 3" },
    { board: "Board4", content: "content of board 4" },
    { board: "Board5", content: "content of board 5" },
    { board: "Board6", content: "content of board 6" },
  ]);
});

module.exports = router;
