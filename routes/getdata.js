var express = require('express');
var router = express.Router();

const {list, creatgot, count, search} = require('../controller/getdata');

router.get('/list',list);

router.get("/count",count);

router.get("/search",search);

module.exports = router;