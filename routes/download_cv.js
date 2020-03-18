var express = require('express');
var router = express.Router();
const fs = require('fs')

router.get("/", (req, res) => {
    var file = fs.createReadStream("./files/Ahmad_Ali_CV.pdf");
    file.pipe(res);
  });


  module.exports = router;