const express = require('express');
const router = express.Router()

const { createMenuItem } = require("../controllers/menuItem")

router.route('/register').post(createMenuItem);

module.exports = router;
