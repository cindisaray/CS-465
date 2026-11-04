var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlTravlr = require('../controllers/travlr');

/* GET home page. */
router.get('/', ctrlMain.index);

router.get('/travel', ctrlTravlr.travel);

module.exports = router;
